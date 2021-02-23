import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/home/Home.vue')
const My = () => import('../views/my/My.vue')
const Friend = () => import('../views/friend/Friend.vue')
const Shop = () => import('../views/shop/Shop.vue')
const Musician = () => import('../views/musician/Musician.vue')
const Download = () => import('../views/download/Download.vue')
const Single = () => import('../views/single/Single.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home/recommend'
  },
  {
    path: '/home',
    redirect: '/home/recommend'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/home/recommend',
        name: 'Recommend',
        component: () => import('../views/home/views/recommend/Recommend.vue')
      },
      {
        path: '/home/ranking',
        name: 'Ranking',
        component: () => import('../views/home/views/ranking/Ranking.vue')
      },
      {
        path: '/home/song',
        name: 'Song',
        component: () => import('../views/home/views/song/Song.vue')
      },
      {
        path: '/home/radio',
        name: 'Radio',
        component: () => import('../views/home/views/radio/Radio.vue')
      },
      {
        path: '/home/singer',
        name: 'Singer',
        component: () => import('../views/home/views/singer/Singer.vue')
      },
      {
        path: '/home/new',
        name: 'New',
        component: () => import('../views/home/views/new/New.vue')
      }
    ]
  },
  {
    path: '/my',
    name: 'My',
    component: My
  },
  {
    path: '/friend',
    name: 'Friend',
    component: Friend
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/musician',
    name: 'Musician',
    component: Musician
  },
  {
    path: '/download',
    name: 'Download',
    component: Download
  },
  {
    path: '/song/:iid',
    name: 'Single',
    component: Single
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "active"
})

export default router