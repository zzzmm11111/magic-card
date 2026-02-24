import { ref, watch, onBeforeUnmount } from 'vue'

const WGSL = /* wgsl */ `
struct Uniforms {
  time: f32,
  tilt: f32,
  roll: f32,
}
@group(0) @binding(0) var<uniform> u: Uniforms;

struct VertexOutput {
  @builtin(position) position: vec4f,
  @location(0) uv: vec2f,
}

@vertex
fn vertex_main(@location(0) pos: vec2f, @location(1) uv: vec2f) -> VertexOutput {
  var out: VertexOutput;
  out.position = vec4f(pos, 0.0, 1.0);
  out.uv = uv;
  return out;
}

fn hue2rgb(h: f32) -> vec3f {
  let k = vec3f(1.0, 2.0/3.0, 1.0/3.0);
  let p = abs(fract(h + k) * 6.0 - 3.0);
  return 1.0 - min(p, vec3f(1.0));
}

fn hash21(p: vec2f) -> f32 {
  return fract(sin(p.x * 127.1 + p.y * 311.7) * 43758.5453);
}

@fragment
fn fragment_main(@location(0) uv: vec2f) -> @location(0) vec4f {
  let t = fract(uv.x + uv.y + u.time * 0.15 + u.tilt * 0.6 + u.roll * 0.6);
  let rgb = hue2rgb(t);
  let holoAlpha = 0.10;

  let grid = vec2f(140.0, 140.0);
  let cell = floor(uv * grid);
  let h = hash21(cell);
  let brightnessBoost = hash21(cell + vec2f(17.3, 31.7));
  let phase = h * 6.28318 + u.time * 2.5 + u.tilt * 2.0 + u.roll * 2.0;
  let sparkle = pow(clamp(sin(phase) * 0.5 + 0.5, 0.0, 1.0), 8.0);
  let gold = vec3f(1.0, 0.78, 0.0);
  let white = vec3f(1.0, 1.0, 1.0);
  let boost = 0.6 + brightnessBoost * 1.2;
  let sparkleAlpha = sparkle * 0.28 * (0.7 + h * 0.3) * boost;
  let goldMix = min(sparkleAlpha * 2.5, 1.0);
  let whiteHighlight = pow(sparkle, 2.5) * (0.35 + brightnessBoost * 0.55) * boost;

  let baseRgb = mix(rgb, gold, goldMix);
  let outRgb = mix(baseRgb, white, min(whiteHighlight, 1.0));
  let outA = holoAlpha + sparkleAlpha + whiteHighlight * 0.25;
  return vec4f(outRgb, min(outA, 0.55));
}
`

const QUAD = new Float32Array([
  -1, -1, 0, 1, 1, -1, 1, 1, -1, 1, 0, 0,
  -1, 1, 0, 0, 1, -1, 1, 1, 1, 1, 1, 0,
])

export function useWebGpuHolo(
  canvasRef: { value: HTMLCanvasElement | null },
  getUniforms: () => { tilt: number; roll: number },
) {
  const supported = ref(false)
  let device: GPUDevice | null = null
  let context: GPUCanvasContext | null = null
  let pipeline: GPURenderPipeline | null = null
  let uniformBuffer: GPUBuffer | null = null
  let bindGroup: GPUBindGroup | null = null
  let vertexBuffer: GPUBuffer | null = null
  let rafId = 0
  let startTime = 0
  let getUniformsFn = getUniforms

  async function init() {
    const canvas = canvasRef.value
    console.log('[WebGPU Holo] navigator.gpu:', !!navigator.gpu)
    if (!canvas) {
      console.log('[WebGPU Holo] 无 canvas')
      return false
    }
    if (!navigator.gpu) {
      console.log('[WebGPU Holo] 不支持 WebGPU')
      return false
    }
    try {
      const adapter = await navigator.gpu.requestAdapter()
      console.log('[WebGPU Holo] adapter:', !!adapter)
      if (!adapter) return false
      device = await adapter.requestDevice()
      console.log('[WebGPU Holo] device:', !!device)
      context = canvas.getContext('webgpu') as GPUCanvasContext | null
      console.log('[WebGPU Holo] context:', !!context)
      if (!context) return false
      const format = navigator.gpu.getPreferredCanvasFormat?.() ?? 'bgra8unorm'
      context.configure({ device, format, alphaMode: 'premultiplied' })

      const uniformBufferSize = 12
      uniformBuffer = device.createBuffer({
        size: uniformBufferSize,
        usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
      })

      vertexBuffer = device.createBuffer({
        size: QUAD.byteLength,
        usage: GPUBufferUsage.VERTEX,
        mappedAtCreation: true,
      })
      new Float32Array(vertexBuffer.getMappedRange()).set(QUAD)
      vertexBuffer.unmap()

      const shaderModule = device.createShaderModule({ code: WGSL })
      pipeline = device.createRenderPipeline({
        layout: 'auto',
        vertex: {
          module: shaderModule,
          entryPoint: 'vertex_main',
          buffers: [
            {
              arrayStride: 16,
              attributes: [
                { shaderLocation: 0, offset: 0, format: 'float32x2' },
                { shaderLocation: 1, offset: 8, format: 'float32x2' },
              ],
            },
          ],
        },
        fragment: {
          module: shaderModule,
          entryPoint: 'fragment_main',
          targets: [{ format, blend: { color: { srcFactor: 'src-alpha', dstFactor: 'one-minus-src-alpha' }, alpha: { srcFactor: 'one', dstFactor: 'one-minus-src-alpha' } } }],
        },
        primitive: { topology: 'triangle-list' },
      })

      bindGroup = device.createBindGroup({
        layout: pipeline.getBindGroupLayout(0),
        entries: [{ binding: 0, resource: { buffer: uniformBuffer } }],
      })
      console.log('[WebGPU Holo] 支持 WebGPU，闪卡已启用')
      return true
    } catch (e) {
      console.warn('[WebGPU Holo] 初始化失败:', e)
      return false
    }
  }

  function render() {
    if (!device || !context || !pipeline || !uniformBuffer || !bindGroup || !vertexBuffer) return
    const canvas = canvasRef.value
    if (!canvas || canvas.width < 2 || canvas.height < 2) {
      rafId = requestAnimationFrame(render)
      return
    }
    resize()
    const u = getUniformsFn()
    const time = (performance.now() - startTime) / 1000
    const data = new Float32Array([time, u.tilt, u.roll])
    device.queue.writeBuffer(uniformBuffer, 0, data)
    const view = context.getCurrentTexture().createView()
    const encoder = device.createCommandEncoder()
    const pass = encoder.beginRenderPass({
      colorAttachments: [
        { view, clearValue: [0, 0, 0, 0], loadOp: 'clear', storeOp: 'store' },
      ],
    })
    pass.setPipeline(pipeline)
    pass.setBindGroup(0, bindGroup)
    pass.setVertexBuffer(0, vertexBuffer)
    pass.draw(6, 1)
    pass.end()
    device.queue.submit([encoder.finish()])
    rafId = requestAnimationFrame(render)
  }

  function resize() {
    const canvas = canvasRef.value
    if (!canvas || !context) return
    const dpr = Math.min(2, window.devicePixelRatio ?? 1)
    const rect = canvas.getBoundingClientRect()
    const w = Math.max(1, Math.floor(rect.width * dpr))
    const h = Math.max(1, Math.floor(rect.height * dpr))
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w
      canvas.height = h
      if (w > 1 && h > 1) console.log('[WebGPU Holo] canvas 尺寸:', w, 'x', h)
    }
  }

  let resizeObserver: ResizeObserver | null = null

  watch(
    canvasRef,
    async (canvas) => {
      if (!canvas) return
      supported.value = await init()
      console.log('[WebGPU Holo] supported:', supported.value)
      if (supported.value) {
        startTime = performance.now()
        resize()
        resizeObserver = new ResizeObserver(() => resize())
        resizeObserver.observe(canvas)
        render()
      }
    },
    { immediate: true },
  )

  onBeforeUnmount(() => {
    cancelAnimationFrame(rafId)
    resizeObserver?.disconnect()
    device?.destroy()
  })

  return { supported }
}
