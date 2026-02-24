import{u as A}from"./useParallaxSettled-B3NiroU1.js";import{w as k,a as H,j as w,d as W,I as F,J as M,U,V as _,M as C,Y as V,H as z,c as R,Q as S}from"./index-B-873Mkl.js";const O=`
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
`,P=new Float32Array([-1,-1,0,1,1,-1,1,1,-1,1,0,0,-1,1,0,0,1,-1,1,1,1,1,1,0]);function q(u,m){const a=w(!1);let e=null,l=null,c=null,d=null,f=null,p=null,h=0,y=0,B=m;async function G(){var r,i;const t=u.value;if(console.log("[WebGPU Holo] navigator.gpu:",!!navigator.gpu),!t)return console.log("[WebGPU Holo] 无 canvas"),!1;if(!navigator.gpu)return console.log("[WebGPU Holo] 不支持 WebGPU"),!1;try{const o=await navigator.gpu.requestAdapter();if(console.log("[WebGPU Holo] adapter:",!!o),!o||(e=await o.requestDevice(),console.log("[WebGPU Holo] device:",!!e),l=t.getContext("webgpu"),console.log("[WebGPU Holo] context:",!!l),!l))return!1;const n=((i=(r=navigator.gpu).getPreferredCanvasFormat)==null?void 0:i.call(r))??"bgra8unorm";l.configure({device:e,format:n,alphaMode:"premultiplied"}),d=e.createBuffer({size:12,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),p=e.createBuffer({size:P.byteLength,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0}),new Float32Array(p.getMappedRange()).set(P),p.unmap();const s=e.createShaderModule({code:O});return c=e.createRenderPipeline({layout:"auto",vertex:{module:s,entryPoint:"vertex_main",buffers:[{arrayStride:16,attributes:[{shaderLocation:0,offset:0,format:"float32x2"},{shaderLocation:1,offset:8,format:"float32x2"}]}]},fragment:{module:s,entryPoint:"fragment_main",targets:[{format:n,blend:{color:{srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-list"}}),f=e.createBindGroup({layout:c.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:d}}]}),console.log("[WebGPU Holo] 支持 WebGPU，闪卡已启用"),!0}catch(o){return console.warn("[WebGPU Holo] 初始化失败:",o),!1}}function v(){if(!e||!l||!c||!d||!f||!p)return;const t=u.value;if(!t||t.width<2||t.height<2){h=requestAnimationFrame(v);return}b();const r=B(),i=(performance.now()-y)/1e3,o=new Float32Array([i,r.tilt,r.roll]);e.queue.writeBuffer(d,0,o);const n=l.getCurrentTexture().createView(),x=e.createCommandEncoder(),s=x.beginRenderPass({colorAttachments:[{view:n,clearValue:[0,0,0,0],loadOp:"clear",storeOp:"store"}]});s.setPipeline(c),s.setBindGroup(0,f),s.setVertexBuffer(0,p),s.draw(6,1),s.end(),e.queue.submit([x.finish()]),h=requestAnimationFrame(v)}function b(){const t=u.value;if(!t||!l)return;const r=Math.min(2,window.devicePixelRatio??1),i=t.getBoundingClientRect(),o=Math.max(1,Math.floor(i.width*r)),n=Math.max(1,Math.floor(i.height*r));(t.width!==o||t.height!==n)&&(t.width=o,t.height=n,o>1&&n>1&&console.log("[WebGPU Holo] canvas 尺寸:",o,"x",n))}let g=null;return k(u,async t=>{if(t&&(a.value=await G(),console.log("[WebGPU Holo] supported:",a.value),a.value)){y=performance.now(),b(),g=new ResizeObserver(()=>b());const r=u.value;r&&g.observe(r),v()}},{immediate:!0}),H(()=>{cancelAnimationFrame(h),g==null||g.disconnect(),e==null||e.destroy()}),{supported:a}}const L=W({__name:"CardView",setup(u){const m=w(null),a=F(A(m)),e=w(null),l=R(()=>({"--parallax-tilt":a.tilt,"--parallax-roll":a.roll})),{supported:c}=q(e,()=>({tilt:a.tilt,roll:a.roll}));return(d,f)=>(S(),M("div",{ref_key:"container",ref:m,class:"h-screen-dynamic min-h-0 w-full flex flex-col items-center justify-center p-4 touch-none select-none perspective-[400px] bg-gradient-to-b from-sky-50 to-slate-100"},[U("div",{class:"parallax-card relative w-80 rounded-xl overflow-hidden shadow-xl border-2 border-amber-200/80 bg-white",style:z(l.value)},[U("canvas",{ref_key:"cardCanvasRef",ref:e,class:_(["absolute inset-0 z-20 w-full h-full pointer-events-none rounded-xl",{"opacity-0":!C(c)}]),"aria-hidden":"true"},null,2),f[0]||(f[0]=V('<div class="relative z-10 aspect-[5/4] bg-gradient-to-b from-sky-100 to-white flex items-center justify-center border-b-2 border-amber-200/60"><span class="text-8xl drop-shadow-md" aria-hidden="true">🐉</span></div><div class="relative z-10 p-4 bg-white"><div class="text-center font-bold text-slate-800 text-xl tracking-wide"> 青眼白龙 </div><div class="text-center text-xs text-slate-500 mt-0.5"> Blue-Eyes White Dragon </div><div class="flex justify-center gap-4 mt-2 text-xs text-slate-600 font-medium"><span>ATK 3000</span><span>DEF 2500</span></div><p class="mt-3 text-xs text-slate-600 leading-relaxed border-t border-amber-200/60 pt-3"> 以高攻击力著称的传说之龙。其破坏力不可估量，被喻为最强之龙。 </p></div>',2))],4)],512))}});export{L as default};
