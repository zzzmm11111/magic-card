<script setup lang="ts">
import '@/styles/home/view.css'
import { useParallaxSettled } from '@/composables/useParallaxSettled'
import { useRoute, useRouter } from 'vue-router'
import { reactive, computed, watch } from 'vue'

const route = useRoute()
const router = useRouter()
const container = ref<HTMLElement | null>(null)
const parallax = reactive(useParallaxSettled(container))

const parallaxVars = computed(() => ({
  '--parallax-tilt': parallax.tilt,
  '--parallax-roll': parallax.roll,
}))

const slides = [
  { key: 'card', title: '卡片', path: '/card', bg: 'bg-sky-100', textColor: 'text-sky-800', icon: '🎴' },
  { key: 'gem', title: '宝石', path: '/gem', bg: 'bg-violet-100', textColor: 'text-violet-800', icon: '💎' },
  { key: 'paper-cutting', title: '剪纸画', path: '/paper-cutting', bg: 'bg-rose-100', textColor: 'text-rose-800', icon: '✂️' },
  { key: 'story', title: '故事', path: '/story', bg: 'bg-amber-50', textColor: 'text-amber-900', icon: '📖' },
  { key: 'newspaper', title: '哈利波特报纸', path: '/newspaper', bg: 'bg-stone-100', textColor: 'text-stone-700', icon: '📰' },
]

const slideKeyToIndex = (key: string) => {
  const i = slides.findIndex((s) => s.key === key)
  return i >= 0 ? i : 0
}

const querySlide = computed(() => {
  const s = route.query.slide
  const raw = Array.isArray(s) ? s[0] : s
  return typeof raw === 'string' ? raw : ''
})
const currentIndex = ref(slideKeyToIndex(querySlide.value))

watch(
  querySlide,
  (slide) => {
    const idx = slideKeyToIndex(slide ?? '')
    if (idx !== currentIndex.value) currentIndex.value = idx
  },
)

function onSlideChange(index: number) {
  currentIndex.value = index
  const key = slides[index]?.key ?? slides[0].key
  router.replace({ path: route.path, query: { ...route.query, slide: key } })
}
</script>

<template>
  <div
    ref="container"
    class="home-carousel h-screen-dynamic w-full overflow-hidden touch-none"
  >
    <NCarousel
      :current-index="currentIndex"
      show-dots
      draggable
      class="h-full"
      @update:current-index="onSlideChange"
    >
      <template #dots="{ total, currentIndex: idx, to }">
        <div class="absolute bottom-safe left-0 right-0 flex justify-center gap-2">
          <button
            v-for="i in total"
            :key="i"
            type="button"
            class="h-2 rounded-full border-2 border-slate-500/80 bg-slate-400/50 transition-all duration-300 ease-out"
            :class="i - 1 === idx ? 'w-8 bg-slate-600' : 'w-4'"
            :aria-label="`第 ${i} 页`"
            @click.stop="to(i - 1)"
          />
        </div>
      </template>
      <NCarouselItem v-for="slide in slides" :key="slide.key">
        <RouterLink
          v-slot="{ navigate }"
          :to="slide.path"
          custom
        >
          <div
            class="h-full w-full min-h-screen-dynamic perspective-[400px] flex flex-col cursor-grab active:cursor-grabbing select-none transition-colors"
            :class="slide.bg"
            @click="navigate"
          >
            <div class="h-1/3 min-h-[36vh] flex items-center justify-center shrink-0 pt-8">
              <div
                class="parallax-box inline-flex items-center justify-center rounded-3xl border-2 border-white/40 bg-white/30 shadow-lg backdrop-blur-sm p-6"
                :style="parallaxVars"
              >
                <span
                  class="inline-block select-none text-[11rem] leading-none"
                  aria-hidden="true"
                >{{ slide.icon }}</span>
              </div>
            </div>
            <div class="flex-1" />
            <div class="shrink-0 pb-safe-bottom pt-2 text-center">
              <span class="text-3xl font-medium" :class="slide.textColor">{{ slide.title }}</span>
            </div>
          </div>
        </RouterLink>
      </NCarouselItem>
    </NCarousel>
  </div>
</template>
