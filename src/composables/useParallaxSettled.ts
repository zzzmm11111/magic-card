import {
  useDeviceOrientation,
  useMediaQuery,
  useMouseInElement,
  useScreenOrientation,
} from '@vueuse/core'
import { computed, unref } from 'vue'
import type { MaybeElementRef } from '@vueuse/core'

/**
 * 按设备类型强制选择视差数据源：PC 用鼠标，移动端用陀螺仪。
 * 不再用延迟，避免移动端刚打开时因自动切换 source 导致的乱转。
 */
export function useParallaxSettled(target: MaybeElementRef<HTMLElement | null>) {
  const isPc = useMediaQuery('(pointer: fine) and (hover: hover)')
  const mouse = useMouseInElement(target, { handleOutside: false })
  const orientation = useDeviceOrientation()
  const screenOrientation = useScreenOrientation()

  const tilt = computed(() => {
    if (unref(isPc)) {
      const { elementX: x, elementWidth: w } = mouse
      const xVal = unref(x)
      const wVal = unref(w)
      if (wVal <= 0) return 0
      return (xVal - wVal / 2) / wVal
    }
    const beta = orientation.beta.value
    const gamma = orientation.gamma.value
    if (beta == null || gamma == null) return 0
    const orient = screenOrientation.orientation?.value ?? ''
    switch (orient) {
      case 'landscape-primary':
        return beta / 90
      case 'landscape-secondary':
        return -beta / 90
      case 'portrait-primary':
        return gamma / 90
      case 'portrait-secondary':
        return -gamma / 90
      default:
        return gamma / 90
    }
  })

  const roll = computed(() => {
    if (unref(isPc)) {
      const { elementY: y, elementHeight: h } = mouse
      const yVal = unref(y)
      const hVal = unref(h)
      if (hVal <= 0) return 0
      return -(yVal - hVal / 2) / hVal
    }
    const beta = orientation.beta.value
    const gamma = orientation.gamma.value
    if (beta == null || gamma == null) return 0
    const orient = screenOrientation.orientation?.value ?? ''
    switch (orient) {
      case 'landscape-primary':
        return gamma / 90
      case 'landscape-secondary':
        return -gamma / 90
      case 'portrait-primary':
        return -beta / 90
      case 'portrait-secondary':
        return beta / 90
      default:
        return -beta / 90
    }
  })

  const source = computed(() => (unref(isPc) ? 'mouse' : 'deviceOrientation'))

  return {
    tilt,
    roll,
    source,
  }
}
