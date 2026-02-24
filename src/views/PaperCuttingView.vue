<script setup lang="ts">
import '@/styles/paper-cutting/view.css'
import { useParallax } from '@vueuse/core'
import { computed, reactive } from 'vue'

const container = ref<HTMLElement | null>(null)
const parallax = reactive(useParallax(container))

const parallaxVars = computed(() => ({
  '--parallax-tilt': parallax.tilt,
  '--parallax-roll': parallax.roll,
}))

const layerOffsets = [15, 30, 45, 60]
</script>

<template>
  <div class="h-screen-dynamic flex flex-col bg-linear-to-b from-slate-100 to-slate-200">
    <div
      ref="container"
      class="flex-1 min-h-0 w-full flex flex-col items-center justify-center px-4 py-8 touch-none select-none perspective-[320px]"
    >
      <div class="relative w-64 h-64">
        <div
          v-for="(offset, i) in layerOffsets"
          :key="i"
          class="parallax-layer rounded-full border-2 border-slate-300/60 bg-slate-200/80"
          :class="[`parallax-layer-${i}`]"
          :style="{ ...parallaxVars, '--parallax-offset': offset }"
        />
      </div>
    </div>
  </div>
</template>
