import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
    meta: { title: '首页' },
  },
  {
    path: '/parallax',
    name: 'Parallax',
    component: () => import('@/views/ParallaxView.vue'),
    meta: { title: 'Parallax' },
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
