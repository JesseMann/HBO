import { createRouter, createWebHashHistory } from 'vue-router'
import MoviesView from '@/views/MoviesView.vue';


const routes = [
  {
    path: '/movie/:movieID',
    name: 'MoviesView',
    component: MoviesView,
    props: true
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue') 
  },
  {
    path: '/series',
    name: 'series',
    component: () => import('../views/SeriesView.vue')
  },
  {
    path: '/movies',
    name: 'movies',
    component: () => import('../views/MoviesView.vue')
  },
  {
    path: '/hbo',
    name: 'hbo',
    component: () => import('../views/HBOView.vue')
  },
  {
    path: '/sports',
    name: 'sports',
    component: () => import('../views/SportsView.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('../views/NewsView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
