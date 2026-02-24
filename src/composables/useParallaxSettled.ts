import { useParallax } from '@vueuse/core'
import { computed, ref, unref, watch } from 'vue'
import type { MaybeRefOrGetter } from '@vueuse/core'
import { tryOnScopeDispose } from '@vueuse/core'

const SETTLE_DELAY_MS = 1600

/**
 * 封装 useParallax，在移动端（deviceOrientation）下延迟一段时间再应用视差，
 * 避免页面刚打开时陀螺仪未校准导致的快速乱转。
 */
export function useParallaxSettled(target: MaybeRefOrGetter<HTMLElement | null>) {
  const parallax = useParallax(target)
  const settled = ref(false)
  let settleTimer: ReturnType<typeof setTimeout> | null = null

  const stopWatch = watch(
    () => unref(parallax.source),
    (source) => {
      if (settleTimer) {
        clearTimeout(settleTimer)
        settleTimer = null
      }
      if (source === 'mouse') {
        settled.value = true
        return
      }
      if (source === 'deviceOrientation') {
        settleTimer = setTimeout(() => {
          settled.value = true
          settleTimer = null
        }, SETTLE_DELAY_MS)
      }
    },
    { immediate: true },
  )

  tryOnScopeDispose(() => {
    stopWatch()
    if (settleTimer) clearTimeout(settleTimer)
  })

  const tilt = computed(() => (settled.value ? unref(parallax.tilt) : 0))
  const roll = computed(() => (settled.value ? unref(parallax.roll) : 0))

  return {
    tilt,
    roll,
    source: parallax.source,
  }
}
