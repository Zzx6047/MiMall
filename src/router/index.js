import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import Index from '../views/index'
import Product from '../views/product'
import Detail from '../views/detail'
import Cart from '../views/cart'
import Order from '../views/order'
import OrderConfirm from '../views/orderConfirm'
import OrderList from '../views/orderList.vue'
import OrderPay from '../views/orderPay.vue'
import AliPay from '../views/alipay.vue'

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
        component: Product,
      },
      {
        path: '/detail/:id',
        name: 'detail',
        component: Detail,
      }
    ]
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
  },
  {
    path: '/order',
    name: 'order',
    component: Order,
    children: [
      {
        path: '/list',
        name: 'order-list',
        component: OrderList,
      },
      {
        path: '/confirm',
        name: 'order-confirm',
        component: OrderConfirm,
      },
      {
        path: '/pay',
        name: 'order-pay',
        component: OrderPay,
      },
      {
        path: '/alipay',
        name: 'alipay',
        component: AliPay,
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
