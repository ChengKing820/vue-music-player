import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/IndexPage'
import AccountPage from '@/components/AccountPage'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: IndexPage
  }, {
    path: '/account',
    component: AccountPage
  }]
})
