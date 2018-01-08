import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home
    }, {
      path: '/home',
      name: 'home',
      component: Home
    }, {
      path: '/Content',
      name: 'content',
      component: Home
    }
  ]
})

export default router
