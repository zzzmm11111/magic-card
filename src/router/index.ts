import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
    meta: { title: '首页' },
  },
  {
    path: '/card',
    name: 'Card',
    component: () => import('@/views/CardView.vue'),
    meta: { title: '卡片' },
  },
  {
    path: '/gem',
    name: 'Gem',
    component: () => import('@/views/GemView.vue'),
    meta: { title: '宝石' },
  },
  {
    path: '/paper-cutting',
    name: 'PaperCutting',
    component: () => import('@/views/PaperCuttingView.vue'),
    meta: { title: '剪纸画' },
  },
  {
    path: '/story',
    name: 'Story',
    component: () => import('@/views/StoryView.vue'),
    meta: { title: '故事' },
  },
  {
    path: '/newspaper',
    name: 'Newspaper',
    component: () => import('@/views/NewspaperView.vue'),
    meta: { title: '哈利波特报纸' },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to) => {
  const title = to.meta?.title as string | undefined
  if (title) {
    document.title = `${title} - Magic Card`
  }
  return true
})

export default router
