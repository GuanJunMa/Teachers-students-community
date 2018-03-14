import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Login from '@/components/Login/Login.vue'
import Register from '@/components/Register/Register.vue'
import Forget from '@/components/Forget/Forget.vue'
import MySelf from '@/components/MySelf/MySelf.vue'
import News from '@/components/News/News.vue'
import Display from '@/components/Display/Display.vue'
import Message from '@/components/Message/Message.vue'

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
    }, {
      path: '/Register',
      name: 'Register',
      component: Register
    }, {
      path: '/Forget',
      name: 'Forget',
      component: Forget
    }, {
      path: '/MySelf',
      name: 'MySelf',
      component: MySelf
    }, {
      path: '/News',
      name: 'News',
      component: News
    }, {
      path: '/Message',
      name: 'Message',
      component: Message
    }, {
      path: '/Display',
      name: 'Display',
      component: Display
    }
  ]
})
