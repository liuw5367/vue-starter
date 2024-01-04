import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import HomeView from '@/pages/index.vue'

const _routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('./pages/about.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('./pages/login.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    meta: { title: 'Page Not Found' },
    component: () => import('./pages/[...404].vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // routes: setupLayouts(routes),
  extendRoutes: routes => setupLayouts(routes),
})

export default router
