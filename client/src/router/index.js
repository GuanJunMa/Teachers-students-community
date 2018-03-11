import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Login from '@/components/Login/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }
    // {
    //   path: '/login',
    //   name: 'Login',
    //   component: Login
    // }
  ]
})
