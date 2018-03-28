import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/template/index'

import module from './moduleRouter/module'
Vue.use(Router)

export default new Router({
	mode:"hash",
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    ...module,
  ]
})
