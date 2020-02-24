import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './../views/home'
import Index from './../views/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: 'index',
    children: [
      {
        path: '/index',
        name: 'index',
        component: Index,
      },
      {
        path: '/product/:id',
        name: 'product',
        component: () => import('./../views/product.vue'),
      },
      {
        path: '/detail/:id',
        name: 'detail',
        component: () => import('./../views/detail.vue'),
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('./../views/login.vue'),
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('./../views/cart.vue'),
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('./../views/order.vue'),
    children: [
      {
        path: 'list',
        name: 'order-list',
        component: () => import('./../views/orderList.vue'),
      },
      {
        path: 'confirm',
        name: 'order-confirm',
        component: () => import('./../views/orderConfirm.vue'),
      },
      {
        path: 'pay',
        name: 'order-pay',
        component: () => import('./../views/orderPay.vue'),
      },
      {
        path: 'alipay',
        name: 'alipay',
        component: () => import('./../views/alipay.vue'),
      }
    ]
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
