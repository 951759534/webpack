import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/main/index'
import MainList from '@/components/main/v-main-list.vue';
import Theme from '@/components/theme/index'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  linkActiveClass: 'link-active',
  routes: [
    {
      path: '/zhihu',
      name: 'index',
      component: index,
      children: [
        { path: '/zhihu/index', component: MainList },
        {
          path: '/zhihu',
          redirect: '/zhihu/index'
        },
        {
          path: '/zhihu/theme/:themeId',
          component: Theme
        }
      ]
    }, {
      path: '/',
      redirect: '/zhihu'
    }
  ]
})
