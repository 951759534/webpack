import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/main/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/zhihu',
      name: 'index',
      component: index
    }, {
      path: '/',
      redirect: '/zhihu'
    }
  ]
})
