import { createRouter, createWebHistory } from 'vue-router'
import CountDownView from '../views/CountDownView.vue'
import ChallengeView from '@/views/ChallengeView.vue'
import MapView from '@/views/MapView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'countdown',
      component: CountDownView,
    },
    {
      path: '/challenge',
      name: 'challenge',
      component: ChallengeView,
    },
    {
      path: '/map',
      name: 'map',
      component: MapView,
    },
  ],
})

export default router
