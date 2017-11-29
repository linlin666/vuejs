import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import gaode from '../components/gaode.vue'
import baiduMap from '../components/baiduMap.vue'
import erweima from '../components/erweima.vue'
import emit from '../components/aboutEmit.vue'
import scrollTop from '../components/setScrollTop.vue'
import display from '../components/display.vue'
import betterScroll from '../components/betterScroll.vue'
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
    },
    {
      path: '/emit',
      name: 'emit',
      component: emit
    },
    {
      path: '/scrollTop',
      name: 'scrollTop',
      component: scrollTop
    },
    {
      path: '/display',
      name: 'display',
      component: display
    },
    {
      path: '/betterScroll',
      name: 'betterScroll',
      component: betterScroll
    }
  ]
})
