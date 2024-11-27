import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/movie/:movieID',
    name: 'DynamicMoviesView',
    component: () => import('../views/DynamicMoviesView.vue'),
    props: true,
  },
  {
    path: '/series/:tvID',
    name: 'DynamicSeriesView',
    component: () => import('../views/DynamicSeriesView.vue'),
    props: true,
  },
  {
    path: '/movies',
    name: 'movies',
    component: () => import('../views/MoviesView.vue')
  },
  {
    path: '/',
    alias: '/home',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/series',
    name: 'series',
    component: () => import('../views/SeriesView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
