import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Tab from '@/components/tabComponent'
import alert from '@/components/alert'
import tabExplain from '@/components/tabExplain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Tab',
      name: 'Tab',
      component: Tab
    },
    {
      path: '/alert',
      name: 'alert',
      component: alert
    },
    {
      path: '/',
      name: 'tabExplain',
      component: tabExplain
    }
   
  ]
})
