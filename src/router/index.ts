import { createRouter, createWebHashHistory } from 'vue-router'
import CountDownView from '../views/CountDownView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'countdown',
      component: CountDownView,
    },
    {
      path: '/challenge',
      name: 'challenge',
      component: () => import('../views/ChallengeView.vue'),
    },
  ],
})

export default router
