import Vue from 'vue'
import Router from 'vue-router'
import Menu from '@/components/Menu'
import Header from '@/components/Header'
import latest from '@/components/latest'
import themes from '@/components/themes'
import hot from '@/components/hot'
import Detail from '@/components/Detail';
import DetailHeader from '@/components/DetailHeader';
import Home from '@/components/Home';
import About from '@/components/About';
import Comment from '@/components/Comment';
import Banner from '@/components/Banner';
import columnList from '@/components/columnList';

import  VueResource  from 'vue-resource'
Vue.use(Router)
Vue.use(VueResource)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu
    },
    {
      path: '/header',
      name: 'header',
      component: Header
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/detailheader',
      name: 'detailheader',
      component: DetailHeader
    },
    {
      path: '/columnList',
      name: 'columnList',
      component:  columnList 
    },
    {
      path: '/latest',
      name: 'latest',
      component:  latest 
    },
    {
      path: '/themes',
      name: 'themes',
      component:  themes 
    },
    {
      path: '/hot',
      name: 'hot',
      component:  hot 
    }

  ],
  mode:'history' //去除#

})

