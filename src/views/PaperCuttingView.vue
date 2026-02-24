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
      <RouterLink v-slot="{ navigate }" to="/" custom>
        <NButton quaternary size="small" @click="navigate">← 返回</NButton>
      </RouterLink>
      <h1 class="text-lg font-semibold text-slate-700">
        剪纸画
      </h1>
    </header>

    <div class="px-4 py-2 text-sm text-slate-500 font-mono bg-white/80 rounded-lg mx-4 mb-4">
      <div>roll: {{ parallax.roll.toFixed(3) }}</div>
      <div>tilt: {{ parallax.tilt.toFixed(3) }}</div>
      <div>source: {{ parallax.source }}</div>
    </div>

    <div
      ref="container"
      class="flex-1 flex flex-col items-center justify-center px-4 py-8 touch-none select-none"
      style="min-height: 420px; perspective: 320px;"
    >
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

      <div
        class="mt-8 relative z-10 flex items-center justify-center"
        :style="cardStyle"
      >
        <div class="text-center p-6 text-slate-600">
          <div class="text-4xl mb-2">
            🎴
          </div>
          <div class="font-medium">
            剪纸画
          </div>
          <div class="text-xs mt-1 opacity-70">
            移动鼠标或倾斜设备
          </div>
        </div>
      </div>
    </div>

    <p class="text-center text-xs text-slate-400 pb-6">
      基于 VueUse useParallax
    </p>
  </div>
</template>
