<script setup lang="ts">
import '@/styles/newspaper/view.css'
import { animate } from 'animejs'
import { useParallaxSettled } from '@/composables/useParallaxSettled'
import { computed, reactive, onMounted, onBeforeUnmount } from 'vue'

const container = ref<HTMLElement | null>(null)
const parallax = reactive(useParallaxSettled(container))

const parallaxVars = computed(() => ({
  '--parallax-tilt': parallax.tilt,
  '--parallax-roll': parallax.roll,
}))

const sunEl = ref<HTMLElement | null>(null)
const moonEl = ref<HTMLElement | null>(null)
let sunAnim: ReturnType<typeof animate> | null = null
let moonAnim: ReturnType<typeof animate> | null = null

function runSkyAnimation() {
  if (!sunEl.value || !moonEl.value) return

  const duration = 14000
  const arcY = -70

  sunAnim = animate(sunEl.value, {
    translateX: ['-10%', '110%'],
    translateY: [0, arcY, 0],
    ease: 'inOut',
    duration,
    loop: true,
  })

  moonAnim = animate(moonEl.value, {
    translateX: ['-10%', '110%'],
    translateY: [0, arcY, 0],
    ease: 'inOut',
    duration,
    loop: true,
    delay: duration / 2,
  })
}

onMounted(() => {
  runSkyAnimation()
})

onBeforeUnmount(() => {
  sunAnim?.pause()
  moonAnim?.pause()
})
</script>

<template>
  <div
    ref="container"
    class="newspaper-wrap h-screen-dynamic min-h-0 w-full overflow-auto touch-none p-4 flex flex-col items-center justify-center bg-neutral-300"
  >
    <article
      class="parallax-newspaper w-full max-w-lg rounded shadow-2xl border-2 border-neutral-700 bg-white p-5 pb-6"
      :style="parallaxVars"
    >
      <header class="text-center border-b-2 border-neutral-800 pb-2 mb-4">
        <h1 class="text-2xl font-serif font-bold text-black tracking-wide">
          预言家日报
        </h1>
        <p class="text-xs text-neutral-600 mt-1">
          1981年11月 · 特别号外
        </p>
      </header>

      <div class="newspaper-sky relative aspect-square w-36 shrink-0 float-left mr-4 mb-3 overflow-hidden border border-neutral-500">
        <span
          ref="sunEl"
          class="absolute left-0 bottom-0 text-3xl drop-shadow-md pointer-events-none select-none"
          style="will-change: transform;"
          aria-hidden="true"
        >☀️</span>
        <span
          ref="moonEl"
          class="absolute left-0 bottom-0 text-3xl drop-shadow-md pointer-events-none select-none"
          style="will-change: transform;"
          aria-hidden="true"
        >🌙</span>
      </div>

      <h2 class="text-lg font-serif font-bold text-black mb-2 leading-snug">
        小天狼星·布莱克被指杀害麻瓜，已押送阿兹卡班
      </h2>

      <p class="text-neutral-800 text-sm leading-relaxed">
        昨日晚间，涉嫌杀害彼得·佩迪鲁及十二名麻瓜的 Sirius Black（小天狼星·布莱克）于伦敦街头被傲罗制服。魔法部称，布莱克曾为凤凰社成员，案发当日与波特夫妇之死存在关联。布莱克本人未作辩解，现已被移送阿兹卡班监狱，等候审判。部长呼吁民众保持冷静，勿信坊间流言。
      </p>
      <div class="clear-both" />
    </article>
  </div>
</template>
