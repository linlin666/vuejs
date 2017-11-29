import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import gaode from '../components/gaode.vue'
import baiduMap from '../components/baiduMap.vue'
import erweima from '../components/erweima.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/gaode',
      name: 'gaode',
      component: gaode
    },
    {
      path: '/baiduMap',
      name: 'baiduMap',
      component: baiduMap
    },
    {
      path: '/erweima',
      name: 'erweima',
      component: erweima
    }
  ]
})
