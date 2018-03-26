import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
 **/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/home/index',
    name: 'Home',
    hidden: true,
    children: [{
      path: 'home',
      component: () => import('@/views/home/index')
    }]
  },

  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/table',
  //   name: 'Example',
  //   meta: { title: 'Example', icon: 'example' },
  //   children: [
  //     {
  //       path: 'table',
  //       name: 'Table',
  //       component: () => import('@/views/table/index'),
  //       meta: { title: 'Table', icon: 'table' }
  //     },
  //     {
  //       path: 'tree',
  //       name: 'Tree',
  //       component: () => import('@/views/tree/index'),
  //       meta: { title: 'Tree', icon: 'tree' }
  //     }
  //   ]
  // },

  {
    path: '/home',
    component: Layout,
    redirect: '/home/index',
    children: [
      {
        path: 'index',
        name: 'Home',
        component: () => import('@/views/home/index'),
        meta: { title: '主页', icon: 'home' }
      }
    ]
  },

  {
    path: '/transaction',
    component: Layout,
    redirect: '/transaction/index',
    children: [
      {
        path: 'index',
        name: 'Transaction',
        component: () => import('@/views/transaction/index'),
        meta: { title: '交易', icon: 'transaction' }
      }
    ]
  },

  {
    path: '/status',
    component: Layout,
    redirect: '/status/index',
    children: [
      {
        path: 'index',
        name: 'Status',
        component: () => import('@/views/status/index'),
        meta: { title: '状态', icon: 'status' }
      }
    ]
  },

  {
    path: '/block',
    component: Layout,
    redirect: '/block/index',
    children: [
      {
        path: 'index',
        name: 'Block',
        component: () => import('@/views/block/index'),
        meta: { title: '区块', icon: 'block' }
      }
    ]
  },

  {
    path: '/hot',
    component: Layout,
    redirect: '/hot/index',
    meta: { title: '头条', icon: 'hot' },
    children: [
      {
        path: 'index',
        name: 'Hot',
        component: () => import('@/views/hot/index'),
        meta: { title: '头条' }
      },
      {
        path: 'index',
        name: 'Hot',
        component: () => import('@/views/hot/index'),
        meta: { title: '头条' }
      }
    ]
  },

  {
    path: '/tutorial',
    component: Layout,
    redirect: '/tutorial/index',
    meta: { title: '教程', icon: 'tutorial' },
    children: [
      {
        path: 'index',
        name: 'Tutorial',
        component: () => import('@/views/tutorial/index'),
        meta: { title: '教程' }
      },
      {
        path: 'index',
        name: 'Tutorial',
        component: () => import('@/views/tutorial/index'),
        meta: { title: '教程' }
      }
    ]
  },

  {
    path: '/material',
    component: Layout,
    redirect: '/material/index',
    children: [
      {
        path: 'index',
        name: 'Material',
        component: () => import('@/views/material/index'),
        meta: { title: '资料', icon: 'material' }
      }
    ]
  },

  {
    path: '/about',
    component: Layout,
    redirect: '/about/index',
    children: [
      {
        path: 'index',
        name: 'About',
        component: () => import('@/views/about/index'),
        meta: { title: '关于', icon: 'about' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

