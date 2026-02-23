<script setup lang="ts">
import type { CSSProperties } from 'vue'
import { useParallax } from '@vueuse/core'
import { computed, reactive } from 'vue'

const container = ref<HTMLElement | null>(null)
const parallax = reactive(useParallax(container))

const layerBase: CSSProperties = {
  position: 'absolute',
  height: '100%',
  width: '100%',
  transition: '0.2s ease-out',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const layer0 = computed<CSSProperties>(() => ({
  ...layerBase,
  transform: `translateX(${parallax.tilt * 15}px) translateY(${parallax.roll * 15}px) scale(1.2)`,
}))

const layer1 = computed<CSSProperties>(() => ({
  ...layerBase,
  transform: `translateX(${parallax.tilt * 30}px) translateY(${parallax.roll * 30}px) scale(1.2)`,
}))

const layer2 = computed<CSSProperties>(() => ({
  ...layerBase,
  transform: `translateX(${parallax.tilt * 45}px) translateY(${parallax.roll * 45}px) scale(1.2)`,
}))

const layer3 = computed<CSSProperties>(() => ({
  ...layerBase,
  transform: `translateX(${parallax.tilt * 60}px) translateY(${parallax.roll * 60}px) scale(1.2)`,
}))

const cardStyle = computed<CSSProperties>(() => ({
  background: 'rgba(255,255,255,0.95)',
  height: '18rem',
  width: '14rem',
  borderRadius: '12px',
  overflow: 'hidden',
  transition: '0.2s ease-out',
  boxShadow: '0 10px 40px rgba(0,0,0,0.12)',
  transform: `rotateX(${parallax.roll * 15}deg) rotateY(${parallax.tilt * 15}deg)`,
}))
</script>

<template>
  <div class="min-h-screen flex flex-col bg-linear-to-b from-slate-100 to-slate-200">
    <header class="p-4 flex items-center gap-2">
      <NButton quaternary size="small" tag="a" href="#/">
        ← 返回
      </NButton>
      <h1 class="text-lg font-semibold text-slate-700">
        useParallax
      </h1>
    </header>

    <!-- 数值展示（类似 VueUse 文档） -->
    <div class="px-4 py-2 text-sm text-slate-500 font-mono bg-white/80 rounded-lg mx-4 mb-4">
      <div>roll: {{ parallax.roll.toFixed(3) }}</div>
      <div>tilt: {{ parallax.tilt.toFixed(3) }}</div>
      <div>source: {{ parallax.source }}</div>
    </div>

    <!-- 视差区域：绑定 ref 给 useParallax -->
    <div
      ref="container"
      class="flex-1 flex flex-col items-center justify-center px-4 py-8 touch-none select-none"
      style="min-height: 420px; perspective: 320px;"
    >
      <!-- 多层背景圆形（不同层位移不同，形成景深） -->
      <div class="relative w-64 h-64">
        <div
          v-for="(style, i) in [layer0, layer1, layer2, layer3]"
          :key="i"
          class="rounded-full border-2 border-slate-300/60 bg-slate-200/80"
          :style="{
            ...style,
            width: `${120 - i * 20}%`,
            height: `${120 - i * 20}%`,
            left: `${i * 10}%`,
            top: `${i * 10}%`,
          }"
        />
      </div>

      <!-- 中央卡片：随鼠标/陀螺仪 3D 倾斜 -->
      <div
        class="mt-8 relative z-10 flex items-center justify-center"
        :style="cardStyle"
      >
        <div class="text-center p-6 text-slate-600">
          <div class="text-4xl mb-2">
            🎴
          </div>
          <div class="font-medium">
            Parallax Card
          </div>
          <div class="text-xs mt-1 opacity-70">
            移动鼠标或倾斜设备
          </div>
        </div>
      </div>
    </div>

    <p class="text-center text-xs text-slate-400 pb-6">
      基于 VueUse useParallax · 桌面端跟随鼠标，移动端使用设备方向
    </p>
  </div>
</template>
