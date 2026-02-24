<script setup lang="ts">
import '@/styles/story/view.css'
import { animate } from 'animejs'
import { useParallax } from '@vueuse/core'
import { computed, reactive, onMounted, onBeforeUnmount } from 'vue'

const container = ref<HTMLElement | null>(null)
const parallax = reactive(useParallax(container))

const parallaxVars = computed(() => ({
  '--parallax-tilt': parallax.tilt,
  '--parallax-roll': parallax.roll,
}))

const sunEl = ref<HTMLElement | null>(null)
let sunRotateAnim: ReturnType<typeof animate> | null = null

onMounted(() => {
  if (!sunEl.value) return
  sunRotateAnim = animate(sunEl.value, {
    rotate: ['0deg', '360deg'],
    ease: 'linear',
    duration: 12000,
    loop: true,
  })
})

onBeforeUnmount(() => {
  sunRotateAnim?.pause()
})
</script>

<template>
  <div
    ref="container"
    class="story-wrap h-screen-dynamic min-h-0 w-full flex flex-col items-center justify-center p-4 touch-none bg-linear-to-b from-amber-50 to-amber-100"
  >
    <div
      class="parallax-story-frame w-72 aspect-4/3 rounded-xl border-2 border-amber-800/40 bg-amber-50/90 shadow-lg flex flex-col items-center justify-end pb-6 pt-4"
      :style="parallaxVars"
    >
      <div
        class="parallax-story-sun mb-2 inline-block"
        :style="parallaxVars"
        aria-hidden="true"
      >
        <span
          ref="sunEl"
          class="inline-block text-5xl drop-shadow-sm select-none"
          style="will-change: transform;"
        >☀️</span>
      </div>
      <div
        class="parallax-story-mountain inline-block text-8xl drop-shadow-sm select-none"
        :style="parallaxVars"
        aria-hidden="true"
      >
        🏔️
      </div>
    </div>
  </div>
</template>
