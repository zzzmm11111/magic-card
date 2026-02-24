<script setup lang="ts">
import { useParallax } from '@vueuse/core'
import { reactive, computed } from 'vue'

const container = ref<HTMLElement | null>(null)
const parallax = reactive(useParallax(container))

const boxStyle = computed(() => ({
  transform: `translateX(${parallax.tilt * 20}px) translateY(${parallax.roll * 20}px) rotateX(${parallax.roll * 14}deg) rotateY(${parallax.tilt * 14}deg)`,
  transition: 'transform 0.15s ease-out',
}))

const slides = [
  { key: 'card', title: '卡片', path: '/card', bg: 'bg-sky-100', textColor: 'text-sky-800', icon: '🎴' },
  { key: 'gem', title: '宝石', path: '/gem', bg: 'bg-violet-100', textColor: 'text-violet-800', icon: '💎' },
  { key: 'paper-cutting', title: '剪纸画', path: '/paper-cutting', bg: 'bg-rose-100', textColor: 'text-rose-800', icon: '✂️' },
  { key: 'story', title: '故事', path: '/story', bg: 'bg-amber-50', textColor: 'text-amber-900', icon: '📖' },
  { key: 'newspaper', title: '哈利波特报纸', path: '/newspaper', bg: 'bg-stone-100', textColor: 'text-stone-700', icon: '📰' },
]
</script>

<template>
  <div
    ref="container"
    class="home-carousel h-screen w-full overflow-hidden touch-none"
  >
    <NCarousel
      show-dots
      draggable
      :style="{ height: '100%' }"
    >
      <template #dots="{ total, currentIndex, to }">
        <div class="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          <button
            v-for="i in total"
            :key="i"
            type="button"
            class="h-2 rounded-full border-2 border-slate-500/80 bg-slate-400/50 transition-all duration-300 ease-out"
            :class="i - 1 === currentIndex ? 'w-8 bg-slate-600' : 'w-4'"
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
            class="h-full w-full flex flex-col cursor-grab active:cursor-grabbing select-none transition-colors"
            :class="slide.bg"
            style="min-height: 100vh; perspective: 400px;"
            @click="navigate"
          >
            <div class="h-1/3 min-h-[36vh] flex items-center justify-center shrink-0 pt-8">
              <div
                class="inline-flex items-center justify-center rounded-3xl border-2 border-white/40 bg-white/30 shadow-lg backdrop-blur-sm"
                style="padding: 1.5rem; min-width: 12rem; min-height: 12rem;"
                :style="boxStyle"
              >
                <span
                  class="inline-block select-none"
                  style="font-size: 11rem; line-height: 1;"
                  aria-hidden="true"
                >{{ slide.icon }}</span>
              </div>
            </div>
            <div class="flex-1" />
            <div class="shrink-0 pb-16 pt-2 text-center">
              <span class="text-3xl font-medium" :class="slide.textColor">{{ slide.title }}</span>
            </div>
          </div>
        </RouterLink>
      </NCarouselItem>
    </NCarousel>
  </div>
</template>
