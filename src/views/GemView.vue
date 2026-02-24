<script setup lang="ts">
import '@/styles/gem/view.css'
import { useParallaxSettled } from '@/composables/useParallaxSettled'
import { computed, onMounted, onUnmounted, reactive, ref } from 'vue'
import iconHex from '../../resources/mianxingzhengliubianxingzuanshishuijing.svg'
import iconRound from '../../resources/mianxingzuanshishuijing.svg'
import iconHeart from '../../resources/mianxingxinxingzuanshishuijing.svg'
import iconShape12 from '../../resources/mianxingzhengshierbianzuanshishuijing.svg'
import iconOval from '../../resources/mianxingyuanxingzuanshishuijing.svg'
import iconWaterDrop from '../../resources/mianxingshuidixingzuanshishuijing.svg'
import iconLeaf from '../../resources/mianxingyezixingzuanshishuijing.svg'

/** 刻面数据：path d、fill、亮度用中心 (cx,cy)，viewBox 0 0 1024 1024 */
type FacetItem = { d: string; fill: string; cx: number; cy: number }

/** 可选：某预设的高光更亮时的亮度参数覆盖 */
type BrightnessOverrides = {
  max?: number
  base?: number
  kTilt?: number
  kRoll?: number
  kCenterFlat?: number
}

const container = ref<HTMLElement | null>(null)
const parallax = reactive(useParallaxSettled(container))

const parallaxVars = computed(() => ({
  '--parallax-tilt': parallax.tilt,
  '--parallax-roll': parallax.roll,
}))

/** resources 下的宝石预设：id、icon、facets，可选 brightness 覆盖（高光更亮） */
const GEM_PRESETS: { id: string; icon: string; facets: FacetItem[]; brightness?: BrightnessOverrides }[] = [
  {
    id: 'mianxingzhengliubianxingzuanshishuijing',
    icon: iconHex,
    facets: [
      { d: 'M512 148.3L393.5 306.8 302 148.3z', fill: '#BCD6FD', cx: 402, cy: 201 },
      { d: 'M722 148.3l-91.5 158.4L512 148.3z', fill: '#B0C5FD', cx: 612, cy: 201 },
      { d: 'M512 512z', fill: '#82D2FF', cx: 512, cy: 512 },
      { d: 'M275 512H92l108.4-187.8z', fill: '#BCD6FD', cx: 184, cy: 412 },
      { d: 'M393.5 306.8l-193.1 17.4L302 148.3z', fill: '#B0C5FD', cx: 330, cy: 155 },
      { d: 'M512 512z', fill: '#82D2FF', cx: 512, cy: 512 },
      { d: 'M275 512l-78 181.8L92 512z', fill: '#B0C5FD', cx: 155, cy: 398 },
      { d: 'M393.5 717.3L302 875.7 197 693.8z', fill: '#BCD6FD', cx: 297, cy: 762 },
      { d: 'M932 512H749l78-181.8z', fill: '#B0C5FD', cx: 841, cy: 347 },
      { d: 'M827 330.2l-196.5-23.5L722 148.3z', fill: '#97B7FC', cx: 617, cy: 164 },
      { d: 'M302 875.7l91.5-158.4L512 875.7z', fill: '#B0C5FD', cx: 407, cy: 875 },
      { d: 'M512 875.7l118.5-158.5L722 875.7z', fill: '#97B7FC', cx: 617, cy: 797 },
      { d: 'M827 693.8L722 875.7l-91.5-158.5z', fill: '#B0C5FD', cx: 775, cy: 762 },
      { d: 'M932 512L827 693.8 749 512z', fill: '#97B7FC', cx: 836, cy: 572 },
      { d: 'M512 306.7L512 512L275 512L393.5 306.7z', fill: '#EBF2FF', cx: 393, cy: 409 },
      { d: 'M512 512L512 717.3L393.5 717.3L275 512z', fill: '#EBF2FF', cx: 393, cy: 615 },
      { d: 'M512 148.3v158.4l-118.5 0.1zM393.5 306.8L275 512l-74.6-187.8zM393.5 717.3L197 693.8 275 512zM512 717.3v158.4L393.5 717.3z', fill: '#D8E5FE', cx: 393, cy: 443 },
      { d: 'M827 693.8l-196.5 23.4L749 512zM827 330.2L749 512 630.5 306.7zM630.5 306.7H512V148.3z', fill: '#BCD6FD', cx: 670, cy: 415 },
      { d: 'M749 512L512 512L512 306.7L630.5 306.7z', fill: '#D8E5FE', cx: 631, cy: 409 },
      { d: 'M512 512L512 717.3L630.5 717.2L749 512z', fill: '#D8E5FE', cx: 631, cy: 615 },
      { d: 'M630.5 717.2L512 875.7V717.3z', fill: '#BCD6FD', cx: 571, cy: 770 },
    ],
  },
  {
    id: 'mianxingzuanshishuijing',
    icon: iconRound,
    facets: [
      { d: 'M219.6 353.9L382.5 261 512 353.9z', fill: '#A180FF', cx: 372, cy: 323 },
      { d: 'M382.5 353.9V261L512 353.9z', fill: '#CB9AFF', cx: 419, cy: 323 },
      { d: 'M512 170.2v183.7L382.5 261z', fill: '#CB9AFF', cx: 469, cy: 262 },
      { d: 'M338 170.2l44.5 90.8-162.9 92.9V250.2z', fill: '#B68DFF', cx: 319, cy: 249 },
      { d: 'M512 170.2H338l44.5 90.8zM219.6 353.9L72 350l147.6-99.8z', fill: '#CB9AFF', cx: 285, cy: 278 },
      { d: 'M804.4 353.9L641.5 261 512 353.9z', fill: '#CB9AFF', cx: 653, cy: 323 },
      { d: 'M686 170.2L641.5 261l162.9 92.9V250.2z', fill: '#A180FF', cx: 711, cy: 175 },
      { d: 'M512 170.2h174L641.5 261zM804.4 353.9L952 350l-147.6-99.8z', fill: '#CB9AFF', cx: 739, cy: 278 },
      { d: 'M641.5 353.9V261L512 353.9z', fill: '#CB9AFF', cx: 598, cy: 323 },
      { d: 'M641.5 261L512 353.9V170.2z', fill: '#CB9AFF', cx: 555, cy: 262 },
      { d: 'M512 353.9L469.1 512L425.4 512L382.5 353.9z', fill: '#B68DFF', cx: 447, cy: 433 },
      { d: 'M469.1 512L447.2 592.2L425.4 512z', fill: '#B68DFF', cx: 447, cy: 539 },
      { d: 'M219.6 353.9l227.6 238.3-64.7-238.3z', fill: '#CB9AFF', cx: 350, cy: 433 },
      { d: 'M284.5 587.3l-64.9-233.4L72 350z', fill: '#A180FF', cx: 192, cy: 430 },
      { d: 'M512 353.9v499.9l-64.8-261.6z', fill: '#CB9AFF', cx: 490, cy: 600 },
      { d: 'M284.5 587.3l-64.9-233.4 227.6 238.3L512 853.8z', fill: '#B68DFF', cx: 366, cy: 597 },
      { d: 'M512 353.9L554.9 512L598.6 512L641.5 353.9z', fill: '#CB9AFF', cx: 577, cy: 433 },
      { d: 'M554.9 512L576.8 592.2L598.6 512z', fill: '#CB9AFF', cx: 577, cy: 539 },
      { d: 'M804.4 353.9L576.8 592.2l64.7-238.3z', fill: '#CB9AFF', cx: 675, cy: 433 },
      { d: 'M739.5 587.3l64.9-233.4L952 350z', fill: '#A180FF', cx: 832, cy: 430 },
      { d: 'M739.5 587.3l64.9-233.4-227.6 238.3L512 853.8z', fill: '#B68DFF', cx: 570, cy: 656 },
      { d: 'M576.8 592.2L512 853.8V353.9z', fill: '#CB9AFF', cx: 534, cy: 600 },
    ],
    brightness: { max: 3.4, base: 0.84, kTilt: 0.96, kRoll: 0.34, kCenterFlat: 0.34 },
  },
  {
    id: 'mianxingxinxingzuanshishuijing',
    icon: iconHeart,
    facets: [
      { d: 'M512 318.3v408.5L301.7 560.1l-71.1-158.5 38.2-83.3 129.7-58.8z', fill: '#FF98E3', cx: 400, cy: 500 },
      { d: 'M512 183l-113.5 76.5L339.9 112z', fill: '#FB7DC9', cx: 417, cy: 185 },
      { d: 'M268.8 318.3L339.9 112l58.6 147.5z', fill: '#FF98E3', cx: 222, cy: 193 },
      { d: 'M150 198.1l118.8 120.2L339.9 112z', fill: '#FB7DC9', cx: 203, cy: 143 },
      { d: 'M84.4 356.6l146.2 45 38.2-83.3L150 198.1z', fill: '#FF98E3', cx: 120, cy: 278 },
      { d: 'M137.7 528.7l92.9-127.1-146.2-45z', fill: '#FB7DC9', cx: 127, cy: 349 },
      { d: 'M218.3 653l83.4-92.9-71.1-158.5-92.9 127.1z', fill: '#FF98E3', cx: 180, cy: 450 },
      { d: 'M512 726.8l-98.3 98.5L512 912z', fill: '#FB7DC9', cx: 374, cy: 846 },
      { d: 'M301.7 560.1l112 265.2 98.3-98.5z', fill: '#FF98E3', cx: 504, cy: 628 },
      { d: 'M218.3 653l195.4 172.3-112-265.2z', fill: '#FB7DC9', cx: 342, cy: 663 },
      { d: 'M512 183v135.3l-113.5-58.8z', fill: '#FB7DC9', cx: 398, cy: 226 },
      { d: 'M512 318.3v408.5l210.3-166.7 71.1-158.5-38.2-83.3-129.7-58.8z', fill: '#FF98E3', cx: 624, cy: 500 },
      { d: 'M512 183l113.5 76.5L684.1 112z', fill: '#FB7DC9', cx: 603, cy: 184 },
      { d: 'M755.2 318.3L684.1 112l-58.6 147.5z', fill: '#FB7DC9', cx: 726, cy: 193 },
      { d: 'M874 198.1L755.2 318.3 684.1 112z', fill: '#FB7DC9', cx: 773, cy: 209 },
      { d: 'M939.6 356.6l-146.2 45-38.2-83.3L874 198.1z', fill: '#FB7DC9', cx: 825, cy: 278 },
      { d: 'M886.3 528.7l-92.9-127.1 146.2-45z', fill: '#FB7DC9', cx: 780, cy: 349 },
      { d: 'M805.7 653l-83.4-92.9 71.1-158.5 92.9 127.1z', fill: '#FB7DC9', cx: 718, cy: 450 },
      { d: 'M512 726.8l98.3 98.5L512 912z', fill: '#FB7DC9', cx: 650, cy: 846 },
      { d: 'M722.3 560.1l-112 265.2-98.3-98.5z', fill: '#FB7DC9', cx: 520, cy: 628 },
      { d: 'M805.7 653L610.3 825.3l112-265.2z', fill: '#FB7DC9', cx: 676, cy: 663 },
      { d: 'M512 183v135.3l113.5-58.8z', fill: '#FB7DC9', cx: 626, cy: 226 },
    ],
    brightness: { max: 3.4, base: 0.84, kTilt: 0.96, kRoll: 0.34, kCenterFlat: 0.34 },
  },
  {
    id: 'mianxingzhengshierbianzuanshishuijing',
    icon: iconShape12,
    facets: [
      { d: 'M523.4 294.1L413 317.6l18.2-183.9z', fill: '#BCD6FD', cx: 523, cy: 294 },
      { d: 'M532.9 112l-9.5 182.1-92.2-160.4v-0.1z', fill: '#D8E5FE', cx: 533, cy: 112 },
      { d: 'M431.2 133.7L413 317.6l-82.9-162.5z', fill: '#B0C5FD', cx: 431, cy: 134 },
      { d: 'M523.4 294.1L517 417.4v0.4c-1.9-0.1-3.7-0.2-5.6-0.2-15.2 0-29.6 3.6-42.3 10l-56-110 110.3-23.5z', fill: '#D8E5FE', cx: 523, cy: 294 },
      { d: 'M512 417.6L512 512L400 512L400 417.6z', fill: '#D8E5FE', cx: 456, cy: 465 },
      { d: 'M512 512L512 606.5L400 606.5L400 512z', fill: '#D8E5FE', cx: 456, cy: 559 },
      { d: 'M594.1 558.6c-0.9 1.6-1.9 3.2-3 4.8l0.3 0.2c-7.8 11.9-18.5 22.2-31.7 29.8-1.6 0.9-3.3 1.8-4.9 2.7l0.2 0.3c-12.7 6.4-27.1 10-42.3 10h-0.7V417.6c1.6 0 3.3 0.1 4.9 0.2v-0.4c14.3 0.8 28.5 4.9 41.7 12.5 1.6 0.9 3.2 1.9 4.8 3l0.2-0.3c11.9 7.8 22.2 18.5 29.8 31.7 0.9 1.6 1.8 3.2 2.7 4.9l0.3-0.2c6.4 12.7 10 27.1 10 42.3 0 1.9-0.1 3.7-0.2 5.6h0.4c-0.8 14.3-4.8 28.6-12.5 41.7z', fill: '#D8E5FE', cx: 594, cy: 559 },
      { d: 'M512 417.6L512 512L624 512L624 417.6z', fill: '#D8E5FE', cx: 568, cy: 465 },
      { d: 'M512 512L512 606.5L624 606.5L624 512z', fill: '#D8E5FE', cx: 568, cy: 559 },
      { d: 'M469.2 427.9h-0.1l-0.1-0.3z', fill: '#BCD6FD', cx: 469, cy: 428 },
      { d: 'M413 317.6l-84 75.6-76.2-168.4z', fill: '#B0C5FD', cx: 413, cy: 318 },
      { d: 'M330.1 155.1L413 317.6l-160.2-92.8v-0.1z', fill: '#D8E5FE', cx: 330, cy: 155 },
      { d: 'M252.8 224.8L329 393.2l-152.9-99.3z', fill: '#97B7FC', cx: 253, cy: 225 },
      { d: 'M469.2 427.9c-1.7 0.8-3.4 1.7-5 2.7-13.2 7.6-23.9 17.9-31.7 29.8L329 393.2l83.9-75.6 56 110 0.3 0.3zM329 393.2l-34.9 107.4-150.2-107.8z', fill: '#BCD6FD', cx: 469, cy: 428 },
      { d: 'M176.1 293.9L329 393.2l-185.1-0.4z', fill: '#D8E5FE', cx: 176, cy: 294 },
      { d: 'M143.9 392.8l150.2 107.8L112 491z', fill: '#B0C5FD', cx: 144, cy: 393 },
      { d: 'M432.8 460.6c-1 1.6-2 3.1-3 4.8-7.6 13.2-11.7 27.4-12.5 41.7l-123.2-6.5L329 393.2l103.5 67.2 0.3 0.2z', fill: '#D8E5FE', cx: 433, cy: 461 },
      { d: 'M417.7 507.1h-0.3v-0.1z', fill: '#BCD6FD', cx: 418, cy: 507 },
      { d: 'M294.1 500.6L317.6 611l-183.9-18.2z', fill: '#B0C5FD', cx: 294, cy: 501 },
      { d: 'M112 491.1l182.1 9.5-160.4 92.2h-0.1z', fill: '#D8E5FE', cx: 112, cy: 491 },
      { d: 'M133.7 592.8L317.6 611l-162.5 82.9z', fill: '#97B7FC', cx: 134, cy: 593 },
      { d: 'M427.6 555l-110 56-23.5-110.4 123.2 6.4h0.4c-0.1 1.9-0.2 3.7-0.2 5.6 0.1 15.3 3.6 29.7 10.1 42.4z', fill: '#BCD6FD', cx: 428, cy: 555 },
      { d: 'M427.9 554.8v0.1l-0.3 0.1z', fill: '#BCD6FD', cx: 428, cy: 555 },
      { d: 'M317.6 611l75.6 84-168.4 76.2z', fill: '#B0C5FD', cx: 318, cy: 611 },
      { d: 'M155.1 693.9L317.6 611l-92.8 160.2h-0.1z', fill: '#D8E5FE', cx: 155, cy: 694 },
      { d: 'M224.8 771.2L393.2 695l-99.3 152.9z', fill: '#97B7FC', cx: 225, cy: 771 },
      { d: 'M460.4 591.5L393.2 695l-75.6-84 110-56 0.3-0.2c0.8 1.7 1.7 3.3 2.7 4.9 7.5 13.3 17.9 24 29.8 31.8z', fill: '#D8E5FE', cx: 460, cy: 592 },
      { d: 'M393.2 695l107.4 34.9-107.8 150.2z', fill: '#B0C5FD', cx: 393, cy: 695 },
      { d: 'M293.9 847.9L393.2 695l-0.4 185.1z', fill: '#D8E5FE', cx: 294, cy: 848 },
      { d: 'M392.8 880.1l107.8-150.2L491 912z', fill: '#97B7FC', cx: 393, cy: 880 },
      { d: 'M507.1 606.6l-6.5 123.2L393.2 695l67.2-103.5 0.2-0.3c1.6 1 3.1 2 4.8 3 13.1 7.6 27.4 11.6 41.7 12.4z', fill: '#BCD6FD', cx: 507, cy: 607 },
      { d: 'M507.1 606.3v0.3h-0.1l0.1-0.3z', fill: '#BCD6FD', cx: 507, cy: 606 },
      { d: 'M500.6 729.9L611 706.4l-18.2 183.9z', fill: '#97B7FC', cx: 501, cy: 730 },
      { d: 'M491.1 912l9.5-182.1 92.2 160.4v0.1z', fill: '#97B7FC', cx: 491, cy: 912 },
      { d: 'M592.8 890.3L611 706.4l82.9 162.5z', fill: '#BCD6FD', cx: 593, cy: 890 },
      { d: 'M611 706.4l-110.4 23.5 6.4-123.2v-0.4c1.9 0.1 3.7 0.2 5.6 0.2 15.2 0 29.6-3.6 42.3-10L611 706.4z', fill: '#B0C5FD', cx: 611, cy: 706 },
      { d: 'M611 706.4l84-75.6 76.2 168.4z', fill: '#97B7FC', cx: 611, cy: 706 },
      { d: 'M693.9 868.9L611 706.4l160.2 92.8v0.1z', fill: '#97B7FC', cx: 694, cy: 869 },
      { d: 'M771.2 799.2L695 630.8l152.9 99.3zM695 630.8l-84 75.6-56-110-0.2-0.3c1.7-0.8 3.3-1.7 4.9-2.7 13.2-7.6 23.9-17.9 31.7-29.8L695 630.8z', fill: '#BCD6FD', cx: 771, cy: 799 },
      { d: 'M695 630.8l34.9-107.4 150.2 107.8z', fill: '#97B7FC', cx: 695, cy: 631 },
      { d: 'M847.9 730.1L695 630.8l185.1 0.4z', fill: '#97B7FC', cx: 848, cy: 730 },
      { d: 'M880.1 631.2L729.9 523.4 912 533z', fill: '#BCD6FD', cx: 880, cy: 631 },
      { d: 'M729.9 523.4L695 630.8l-103.5-67.2-0.3-0.2c1-1.6 2-3.1 3-4.8 7.6-13.2 11.7-27.4 12.5-41.7l123.2 6.5z', fill: '#B0C5FD', cx: 730, cy: 523 },
      { d: 'M606.6 516.9v0.1l-0.3-0.1z', fill: '#BCD6FD', cx: 607, cy: 517 },
      { d: 'M729.9 523.4L706.4 413l183.9 18.2z', fill: '#B0C5FD', cx: 730, cy: 523 },
      { d: 'M912 532.9l-182.1-9.5 160.4-92.2h0.1z', fill: '#97B7FC', cx: 912, cy: 533 },
      { d: 'M890.3 431.2L706.4 413l162.5-82.9zM729.9 523.4L606.6 517h-0.4c0.1-1.9 0.2-3.7 0.2-5.6 0-15.2-3.6-29.6-10-42.3l110-56 23.5 110.3z', fill: '#BCD6FD', cx: 890, cy: 431 },
      { d: 'M596.4 469l-0.3 0.2v-0.1z', fill: '#BCD6FD', cx: 596, cy: 469 },
      { d: 'M706.4 413l-75.6-84 168.4-76.2z', fill: '#97B7FC', cx: 706, cy: 413 },
      { d: 'M868.9 330.1L706.4 413l92.8-160.2h0.1z', fill: '#97B7FC', cx: 869, cy: 330 },
      { d: 'M799.2 252.8L630.8 329l99.3-152.9z', fill: '#BCD6FD', cx: 799, cy: 253 },
      { d: 'M706.4 413l-110 56-0.3 0.2c-0.8-1.7-1.7-3.3-2.7-4.9-7.6-13.2-17.9-23.9-29.8-31.7L630.8 329l75.6 84z', fill: '#B0C5FD', cx: 706, cy: 413 },
      { d: 'M630.8 329l-107.4-34.9 107.8-150.2z', fill: '#B0C5FD', cx: 631, cy: 329 },
      { d: 'M730.1 176.1L630.8 329l0.4-185.1z', fill: '#97B7FC', cx: 730, cy: 176 },
      { d: 'M631.2 143.9L523.4 294.1 533 112zM630.8 329l-67.2 103.5-0.2 0.3c-1.6-1-3.1-2-4.8-3-13.2-7.6-27.4-11.7-41.7-12.5l6.5-123.2L630.8 329z', fill: '#BCD6FD', cx: 631, cy: 144 },
      { d: 'M517 417.4l-0.1 0.3v-0.3z', fill: '#BCD6FD', cx: 517, cy: 417 },
    ],
  },
  {
    id: 'mianxingyuanxingzuanshishuijing',
    icon: iconOval,
    facets: [
      { d: 'M512 112v400l-62.5-108.2z', fill: '#FFF48A', cx: 481, cy: 312 },
      { d: 'M512 512v400l-62.5-291.7z', fill: '#FFF48A', cx: 481, cy: 612 },
      { d: 'M165.6 712L387 512h125l-62.5 108.3z', fill: '#FFC25A', cx: 239, cy: 645 },
      { d: 'M574.5 620.3L512 512h125l221.4 200z', fill: '#FFAF45', cx: 554, cy: 584 },
      { d: 'M512 512h125l221.4-200-283.9 91.8z', fill: '#FFC25A', cx: 574, cy: 412 },
      { d: 'M512 112l-62.5 291.8-134.4-240c58.2-33 125.4-51.8 196.9-51.8z', fill: '#FFE572', cx: 455, cy: 228 },
      { d: 'M387 512H112c0-72.4 19.3-140.4 53-199l0.6-1L387 512z', fill: '#FFC25A', cx: 318, cy: 512 },
      { d: 'M387 512L165.6 712l-2.2-3.5C130.8 650.4 112 583.5 112 512h275z', fill: '#FFAF45', cx: 313, cy: 579 },
      { d: 'M449.5 403.8L165.6 312v-0.1c35.7-61.8 87.4-113 149.5-148.1l134.4 240z', fill: '#FFC25A', cx: 355, cy: 373 },
      { d: 'M512 912c-67.1 0-130.5-16.6-186.1-45.9l123.6-245.9L512 912z', fill: '#FFE572', cx: 420, cy: 758 },
      { d: 'M449.5 620.3L325.9 866.1c-66.6-35-122-88.2-159.8-153.1l-0.5-1 283.9-91.7z', fill: '#FFAF45', cx: 408, cy: 702 },
      { d: 'M858.4 712l-0.7 1.4c-33.3 57-80.1 105-136.4 139.6L574.5 620.3 858.4 712z', fill: '#FF9843', cx: 787, cy: 689 },
      { d: 'M721.2 853c-60.9 37.4-132.6 59-209.2 59l62.5-291.7L721.2 853z', fill: '#FFC25A', cx: 587, cy: 706 },
      { d: 'M912 512H637l221.4-200 0.6 1c33.8 58.6 53 126.6 53 199z', fill: '#FFAF45', cx: 820, cy: 512 },
      { d: 'M912 512c0 72.3-19.2 140-52.6 198.5l-1 1.5L637 512h275z', fill: '#FF9843', cx: 775, cy: 556 },
      { d: 'M858.4 312l-283.9 91.8L714.4 167c59.2 35 108.9 84.6 143.6 144.1l0.4 0.9z', fill: '#FFAF45', cx: 810, cy: 264 },
      { d: 'M714.4 167L574.5 403.8 512 112c73.9 0 143 20 202.4 55z', fill: '#FFC25A', cx: 629, cy: 212 },
      { d: 'M574.5 620.3L512 912V512zM574.5 403.8L512 512V112z', fill: '#FFE572', cx: 543, cy: 539 },
      { d: 'M387 512h125l-62.5-108.2L165.6 312z', fill: '#FFE572', cx: 313, cy: 445 },
    ],
  },
  {
    id: 'mianxingshuidixingzuanshishuijing',
    icon: iconWaterDrop,
    facets: [
      { d: 'M512.1 445.6v365.3l-114.2-62.3-45.7-120.3 76.7-149.5z', fill: '#EBF2FF', cx: 512, cy: 446 },
      { d: 'M512.1 72v373.6L429 478.8 316.3 344.5c25.4-45.8 53.2-88.8 79.6-126.3C457.5 130.7 512.1 72 512.1 72z', fill: '#D8E5FE', cx: 442, cy: 242 },
      { d: 'M428.9 478.8l-76.7 149.5L224 662.9c-0.5-9.3-0.6-18.8-0.5-28.5 1.6-96.1 42.2-199 92.7-290l112.7 134.4z', fill: '#BCD6FD', cx: 361, cy: 540 },
      { d: 'M397.9 748.6L296.7 855.2C257.3 811.3 228 749.3 224 662.9l128.2-34.6 45.7 120.3z', fill: '#B0C5FD', cx: 364, cy: 784 },
      { d: 'M512.1 810.9V952c-51.6 0-148.2-22.1-215.3-96.8L398 748.6l114.1 62.3z', fill: '#98B7F9', cx: 484, cy: 831 },
      { d: 'M707.9 344.5L595.2 478.8h-0.1l-83-33.2V72s54.5 58.6 116.2 146v0.1c26.5 37.6 54.2 80.5 79.6 126.4z', fill: '#BCD6FD', cx: 652, cy: 310 },
      { d: 'M800.5 634.4c0.1 9.7 0 19.2-0.5 28.5l-128.1-34.6-76.7-149.5 112.7-134.4c50.4 91.1 91.1 193.9 92.6 290z', fill: '#B0C5FD', cx: 801, cy: 634 },
      { d: 'M800 662.9c-4.1 86.2-33.3 148.2-72.8 192.1l-101-106.5 45.7-120.3L800 662.9z', fill: '#98B7F9', cx: 800, cy: 663 },
      { d: 'M727.3 855c-67 74.8-163.6 97-215.2 97V810.9l114.2-62.3 101 106.4z', fill: '#7FA9F4', cx: 727, cy: 840 },
      { d: 'M512.1 72v373.6L395.9 218.2C457.5 130.7 512.1 72 512.1 72z', fill: '#EBF2FF', cx: 473, cy: 121 },
      { d: 'M628.3 218v0.1L512.1 445.6V72s54.5 58.6 116.2 146zM671.8 628.3l-45.6 120.3-114.1 62.3V445.6l83 33.2z', fill: '#D8E5FE', cx: 608, cy: 321 },
    ],
  },
  {
    id: 'mianxingyezixingzuanshishuijing',
    icon: iconLeaf,
    facets: [
      { d: 'M512 338.2v347.6l-86.9 54.7-93.8-228.4 93.8-228.6z', fill: '#EAFF8B', cx: 512, cy: 338 },
      { d: 'M425.1 283.5L227.6 394.6c18.6-72.6 53.1-131.2 91.9-177.6l105.6 66.5zM512 72v139.1l-86.9 72.4z', fill: '#89CC5C', cx: 403, cy: 263 },
      { d: 'M512 72l-86.9 211.5L319.5 217c83.6-100 187-142.8 192.3-144.9l0.2-0.1zM331.3 512.1H213.2c0-42.7 5.3-81.7 14.4-117.5l103.7 117.5z', fill: '#64B350', cx: 400, cy: 243 },
      { d: 'M425.1 283.5l-93.8 228.6-103.7-117.5zM512 211.1v127.1l-86.9-54.7z', fill: '#B5E668', cx: 447, cy: 265 },
      { d: 'M425.1 740.5L319.5 807c-38.8-46.4-73.4-105-91.9-177.6l197.5 111.1z', fill: '#89CC5C', cx: 390, cy: 763 },
      { d: 'M512 952l-0.2-0.1c-5.3-2.1-108.7-44.9-192.3-144.9l105.6-66.4L512 952z', fill: '#64B350', cx: 512, cy: 952 },
      { d: 'M512 812.9V952l-86.9-211.5zM331.3 512.1L227.6 629.4c-9.2-35.7-14.4-74.8-14.4-117.4h118.1z', fill: '#89CC5C', cx: 434, cy: 755 },
      { d: 'M425.1 740.5L227.6 629.4l103.7-117.3zM512 685.8v127.1l-86.9-72.4zM512 338.2v347.6l86.9 54.7 93.8-228.4-93.8-228.6z', fill: '#B5E668', cx: 422, cy: 659 },
      { d: 'M598.9 283.5l197.5 111.1C777.8 322 743.3 263.4 704.5 217l-105.6 66.5zM512 72v139.1l86.9 72.4z', fill: '#64B350', cx: 577, cy: 231 },
      { d: 'M512 72l86.9 211.5L704.5 217c-83.6-100-187-142.8-192.3-144.9l-0.2-0.1zM692.7 512.1h118.1c0-42.7-5.3-81.7-14.4-117.5L692.7 512.1z', fill: '#35A03A', cx: 604, cy: 243 },
      { d: 'M598.9 283.5l93.8 228.6 103.7-117.5zM512 211.1v127.1l86.9-54.7z', fill: '#89CC5C', cx: 577, cy: 265 },
      { d: 'M598.9 740.5L704.5 807c38.8-46.4 73.4-105 91.9-177.6L598.9 740.5z', fill: '#64B350', cx: 625, cy: 757 },
      { d: 'M512 952l0.2-0.1c5.3-2.1 108.7-44.9 192.3-144.9l-105.6-66.4L512 952z', fill: '#35A03A', cx: 512, cy: 952 },
      { d: 'M512 812.9V952l86.9-211.5zM692.7 512.1l103.7 117.4c9.2-35.7 14.4-74.8 14.4-117.4H692.7z', fill: '#64B350', cx: 572, cy: 736 },
      { d: 'M598.9 740.5l197.5-111.1-103.7-117.3zM512 685.8v127.1l86.9-72.4z', fill: '#89CC5C', cx: 577, cy: 727 },
    ],
  },
]

const currentGemId = ref(GEM_PRESETS[0].id)
const FACETS = computed(() => GEM_PRESETS.find((p) => p.id === currentGemId.value)!.facets)

const CENTER = 512
const defaultBrightness = {
  kTilt: 0.88,
  kRoll: 0.3,
  kCenterFlat: 0.28,
  base: 0.78,
  max: 2.9,
  min: 0.48,
}

/** 设备平放时中心最亮；倾斜时按迎光面亮。可选 overrides 让圆形/心形等高光更亮。 */
function facetBrightness(cx: number, cy: number, overrides?: BrightnessOverrides): number {
  const t = parallax.tilt
  const r = parallax.roll
  const kTilt = overrides?.kTilt ?? defaultBrightness.kTilt
  const kRoll = overrides?.kRoll ?? defaultBrightness.kRoll
  const kCenterFlat = overrides?.kCenterFlat ?? defaultBrightness.kCenterFlat
  const base = overrides?.base ?? defaultBrightness.base
  const maxB = overrides?.max ?? defaultBrightness.max
  const minB = defaultBrightness.min
  const dx = (cx - CENTER) / CENTER
  const dy = (cy - CENTER) / CENTER
  const dist2 = dx * dx + dy * dy
  const centerFactor = Math.max(0, 1 - dist2)
  const flatFactor = Math.max(0, 1 - (t * t + r * r))
  const centerBoost = flatFactor * kCenterFlat * centerFactor
  const b = base - t * dx * kTilt + r * dy * kRoll + centerBoost
  return Math.min(maxB, Math.max(minB, b))
}

const currentPreset = computed(() => GEM_PRESETS.find((p) => p.id === currentGemId.value)!)
const facetStyles = computed(() =>
  FACETS.value.map((f) => ({ filter: `brightness(${facetBrightness(f.cx, f.cy, currentPreset.value.brightness)})` })));

/** 小星星形状：五角星 path，中心在 (0,0)，外径约 20、内径约 8，用于随机位置闪烁 */
const SPARKLE_STAR_PATH = 'M20 0L6.2 5.7L5.6 17.1L-2.2 6.7L-14.6 10.6L-7 0L-14.6-10.6L-2.2-6.7L5.6-17.1L6.2-5.7Z'
const sparkles = ref<{ x: number; y: number; scale: number; visible: boolean; key: number }[]>([
  { x: 0, y: 0, scale: 1, visible: false, key: 0 },
  { x: 0, y: 0, scale: 1, visible: false, key: 1 },
])
const SPARKLE_X_MIN = 260
const SPARKLE_X_MAX = 764
const SPARKLE_Y_MIN = 220
const SPARKLE_Y_MAX = 804
const SPARKLE_SCALE_MIN = 0.5
const SPARKLE_SCALE_MAX = 1.4
const FLASH_DURATION = 650

let sparkleTimeout: ReturnType<typeof setTimeout> | null = null

function randomIn(min: number, max: number) {
  return min + Math.random() * (max - min)
}

function triggerSparkle() {
  const i = Math.random() < 0.5 ? 0 : 1
  const s = sparkles.value[i]
  s.x = randomIn(SPARKLE_X_MIN, SPARKLE_X_MAX)
  s.y = randomIn(SPARKLE_Y_MIN, SPARKLE_Y_MAX)
  s.scale = randomIn(SPARKLE_SCALE_MIN, SPARKLE_SCALE_MAX)
  s.visible = true
  s.key += 1
  setTimeout(() => {
    sparkles.value[i].visible = false
  }, FLASH_DURATION)
}

function scheduleNext() {
  const delay = 800 + Math.random() * 1800
  sparkleTimeout = setTimeout(() => {
    triggerSparkle()
    scheduleNext()
  }, delay)
}

onMounted(() => {
  setTimeout(() => triggerSparkle(), 300)
  scheduleNext()
})

onUnmounted(() => {
  if (sparkleTimeout) clearTimeout(sparkleTimeout)
})
</script>

<template>
  <div
    ref="container"
    class="h-screen-dynamic min-h-0 w-full flex flex-col items-center justify-center gap-6 p-4 touch-none select-none perspective-normal bg-linear-to-b from-violet-100 to-slate-200"
  >
    <div
      class="parallax-gem gem-brilliant shrink-0"
      :style="parallaxVars"
      aria-hidden="true"
    >
      <svg
        class="gem-svg"
        viewBox="0 0 1024 1024"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          v-for="(facet, i) in FACETS"
          :key="`${currentGemId}-${i}`"
          class="facet"
          :style="facetStyles[i]"
        >
          <path :d="facet.d" :fill="facet.fill" />
        </g>
        <!-- 随机位置、随机大小闪烁的小星星，亮度不随角度变化，营造 bulingbuling -->
        <g
          v-for="(s, i) in sparkles"
          :key="`sparkle-${i}-${s.key}`"
          class="sparkle"
          :transform="`translate(${s.x},${s.y}) scale(${s.scale})`"
          :class="{ 'sparkle--visible': s.visible }"
        >
          <path :d="SPARKLE_STAR_PATH" fill="#FFFFFF" />
        </g>
      </svg>
    </div>
    <div class="flex flex-wrap justify-center gap-3">
      <button
        v-for="preset in GEM_PRESETS"
        :key="preset.id"
        type="button"
        class="gem-switch-btn"
        :class="{ 'gem-switch-btn--active': currentGemId === preset.id }"
        @click="currentGemId = preset.id"
      >
        <img :src="preset.icon" class="gem-switch-btn__img" />
      </button>
    </div>
  </div>
</template>
