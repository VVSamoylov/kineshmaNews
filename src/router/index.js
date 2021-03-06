import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

import politics from '@/views/news/politics.vue'
import index from '@/views/news/index.vue'
import economics from '@/views/news/economics.vue'
import incidents from '@/views/news/incidents.vue'
import piple from '@/views/news/piple.vue'
import science from '@/views/news/science.vue'
import sports from '@/views/news/sports.vue'
import createArticle from '@/views/admin/createArticle.vue'
import login from '@/views/news/login.vue'
import article from '@/views/news/article.vue'
import indexAdmin from '@/views/admin/indexAdmin.vue'
import editartice from '@/views/admin/editArticle.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path:'/article/:id',
    name:'article',
    props: true,
    component: article
  },
  {
    path:'/admin/editartice/:id',
    name:'editartice',
    props: true,
    component: editartice
  },
  {
    path: '/politics',
    name: 'politics',
    component: politics
  },
  {

    path: '/piple',
    name: 'piple',
    component: piple
  },
  {
    path: '/science',
    name: 'science',
    component: science
  },
  {
    path: '/sports',
    name: 'sports',

    component: sports
  },
  {
    path: '/economics',
    name: 'economics',
    component: economics
  },
  {
    path: '/incidents',
    name: 'incidents',
    component: incidents
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/admin/create',
    name: 'admin/create',
    component: createArticle
  },
  {
    path: '/admin/list',
    name: 'admin/list',
    component: indexAdmin
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
