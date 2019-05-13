import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import alert from '@/components/alert'
import tabSelected from '@/components/tabSelected'
import tabExplain from '@/components/tabExplain'
import head from '@/components/head'
import menu from '@/components/menu'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/alert',
      name: 'alert',
      component: alert
    },
    {
      path: '/tabExplain',
      name: 'tabExplain',
      component: tabExplain
    },
    {
      path: '/tabSelected',
      name: 'tabSelected',
      component: tabSelected
    },
    {
      path: '/head',
      name: 'head',
      component: head
    },
    {
      path: '/menu',
      name: 'menu',
      component: menu
    }

  ]
})
