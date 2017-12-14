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
import diyImg from '../components/diyImg.vue'
import slidX from '../components/slidX.vue'
import datePicker from '../components/datePicker.vue'
import emoji from '../components/emoji.vue'
import vueEditor from '../components/vue-vue-kindeditor.vue'

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
    },
    {
      path: '/diyImg',
      name: 'diyImg',
      component: diyImg
    },
    {
      path: '/slidX',
      name: 'slidX',
      component: slidX
    },
    {
      path: '/datePicker',
      name: 'datePicker',
      component: datePicker
    },
    {
      path: '/emoji',
      name: 'emoji',
      component: emoji
    },
    {
      path: '/vueEditor',
      name: 'vueEditor',
      component: vueEditor
    }
  ]
})
