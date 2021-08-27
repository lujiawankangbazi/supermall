import Vue from 'vue'
import VueRouter from 'vue-router'


const Home =() => import('../views/Home.vue')
const Categroy =() => import('../views/Categroy.vue')
const Cart =() => import('../views/Cart.vue')
const Profile =() => import('../views/Profile.vue')


Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/categroy',
      component: Categroy
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/profile',
      component: Profile
    }
  ],
  mode: 'history'
})

export default   router 

  