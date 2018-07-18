import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Article from '@/views/Article'
import Theme from '@/views/Theme'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/article',
      name: 'article',
      component: Article
    },
    {
      path: '/theme',
      name: 'theme',
      component: Theme
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
