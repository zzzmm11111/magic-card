<script setup lang="ts">
import '@/styles/paper-cutting/view.css'
import { useParallaxSettled } from '@/composables/useParallaxSettled'
import { computed, reactive, ref } from 'vue'
import shadowboxSvg from '../../resources/MOM SHADOWBOX.svg?raw'

const container = ref<HTMLElement | null>(null)
const parallax = reactive(useParallaxSettled(container))

/** 11 层（LAYER_11 背景 → LAYER_01 最外），LAYER_01、LAYER_02 视差为 0，其余越靠里偏移越大 */
const LAYER_COUNT = 11
const layerOffsets = Array.from({ length: LAYER_COUNT }, (_, i) => (i >= LAYER_COUNT - 2 ? 0 : 12 + i * 10))

const parallaxVars = computed(() => {
  const vars: Record<string, number | string> = {
    '--parallax-tilt': parallax.tilt,
    '--parallax-roll': parallax.roll,
  }
  layerOffsets.forEach((offset, i) => {
    vars[`--parallax-offset-${i}`] = offset
  })
  return vars
})
</script>

<template>
  <div class="h-screen-dynamic flex flex-col bg-linear-to-b from-slate-100 to-slate-200">
    <div
      ref="container"
      class="flex-1 min-h-0 w-full flex flex-col items-center justify-center px-4 py-8 touch-none select-none perspective-[320px]"
    >
      <div class="shadowbox-wrap" :style="parallaxVars">
        <div class="shadowbox-clip">
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div class="w-full h-full" v-html="shadowboxSvg" />
        </div>
      </div>
    </div>
  </div>
</template>
