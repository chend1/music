import Vue from 'vue'
import VueRouter from 'vue-router'
import store from 'store'
const Home = () => import('../views/home/Home.vue')
const My = () => import('../views/my/My.vue')
const Friend = () => import('../views/friend/Friend.vue')
const Shop = () => import('../views/shop/Shop.vue')
const Musician = () => import('../views/musician/Musician.vue')
const Download = () => import('../views/download/Download.vue')


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
        redirect: '/home/ranking/19723756',
        name: 'Ranking',
        component: () => import('../views/home/views/ranking/Ranking.vue'),
        children: [
          {
            path: '/home/ranking/:topid',
            name: 'RankingItem',
            component: () => import('../views/home/views/ranking/childCpn/RankingItem.vue')
          }
        ]
      },
      {
        path: '/home/playlist',
        name: 'PlayList',
        component: () => import('../views/home/views/playlist/PlayList.vue')
      },
      {
        path: '/home/playlist/:listid',
        name: 'PlayList',
        component: () => import('../views/home/views/playlist/listdetail/ListDetail.vue'),
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
        path: '/home/singer/:singerId',
        name: 'SingerItem',
        component: () => import('../views/home/views/singer/SingerItem.vue')
      },
      {
        path: '/home/album',
        name: 'Album',
        component: () => import('../views/home/views/album/NewAlbum.vue')
      },
      {
        path: '/home/album/:id',
        name: 'AlbumId',
        component: () => import('../views/home/views/album/NewAlbumItem.vue')
      },
      {
        path: '/home/single/:iid',
        name: 'Single',
        component: () => import('../views/home/views/single/Single.vue')
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "active"
})
// 路由守卫
router.beforeEach((to, from, next) => {
  if(to == from){
    store.commit('closeList')
  }
  store.commit('closeList')
  next()
})


export default router