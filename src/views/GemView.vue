<script setup lang="ts">
import '@/styles/gem/view.css'
import { useParallaxSettled } from '@/composables/useParallaxSettled'
import { computed, reactive } from 'vue'

const container = ref<HTMLElement | null>(null)
const parallax = reactive(useParallaxSettled(container))

const parallaxVars = computed(() => ({
  '--parallax-tilt': parallax.tilt,
  '--parallax-roll': parallax.roll,
}))
</script>

<template>
  <div
    ref="container"
    class="h-screen-dynamic min-h-0 w-full flex flex-col items-center justify-center p-4 touch-none select-none perspective-normal bg-linear-to-b from-violet-100 to-slate-200"
  >
    <div
      class="parallax-gem diamond w-48 h-56 shrink-0 shadow-2xl border border-white/40"
      :style="parallaxVars"
      aria-hidden="true"
    />
  </div>
</template>
