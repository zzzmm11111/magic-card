<script setup lang="ts">
import '@/styles/card/view.css'
import { useParallaxSettled } from '@/composables/useParallaxSettled'
import { useWebGpuHolo } from '@/composables/useWebGpuHolo'
import { computed, reactive } from 'vue'

const container = ref<HTMLElement | null>(null)
const parallax = reactive(useParallaxSettled(container))
const cardCanvasRef = ref<HTMLCanvasElement | null>(null)

const parallaxVars = computed(() => ({
  '--parallax-tilt': parallax.tilt,
  '--parallax-roll': parallax.roll,
}))

const { supported: webGpuSupported } = useWebGpuHolo(cardCanvasRef, () => ({
  tilt: parallax.tilt,
  roll: parallax.roll,
}))
</script>

<template>
  <div
    ref="container"
    class="h-screen-dynamic min-h-0 w-full flex flex-col items-center justify-center p-4 touch-none select-none perspective-[400px] bg-gradient-to-b from-sky-50 to-slate-100"
  >
    <div
      class="parallax-card relative w-80 rounded-xl overflow-hidden shadow-xl border-2 border-amber-200/80 bg-white"
      :style="parallaxVars"
    >
      <canvas
        ref="cardCanvasRef"
        class="absolute inset-0 z-20 w-full h-full pointer-events-none rounded-xl"
        :class="{ 'opacity-0': !webGpuSupported }"
        aria-hidden="true"
      />
      <!-- 卡图区 -->
      <div class="relative z-10 aspect-[5/4] bg-gradient-to-b from-sky-100 to-white flex items-center justify-center border-b-2 border-amber-200/60">
        <span class="text-8xl drop-shadow-md" aria-hidden="true">🐉</span>
      </div>
      <!-- 卡名与信息 -->
      <div class="relative z-10 p-4 bg-white">
        <div class="text-center font-bold text-slate-800 text-xl tracking-wide">
          青眼白龙
        </div>
        <div class="text-center text-xs text-slate-500 mt-0.5">
          Blue-Eyes White Dragon
        </div>
        <div class="flex justify-center gap-4 mt-2 text-xs text-slate-600 font-medium">
          <span>ATK 3000</span>
          <span>DEF 2500</span>
        </div>
        <p class="mt-3 text-xs text-slate-600 leading-relaxed border-t border-amber-200/60 pt-3">
          以高攻击力著称的传说之龙。其破坏力不可估量，被喻为最强之龙。
        </p>
      </div>
    </div>
  </div>
</template>
