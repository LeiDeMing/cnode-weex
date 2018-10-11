import Vue from 'vue'
/* global Vue */
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Own from '@/components/own/Own'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/own',
      name: 'Own',
      component: Own
    }
  ]
})
