<template>
  <div>
    百度地图
    <div id="myBMap">
    </div>
  </div>
</template>
<script>
  import BMap from 'BMap'
  export default {
    data () {
      return {}
    },
    methods: {
      initBMap () {
        // 百度地图API功能
        var map = new BMap.Map('myBMap')  // 创建Map实例
        var point = new BMap.Point(113.415988, 23.140149)
        map.centerAndZoom(point, 19) // 初始化地图,设置中心点坐标和地图级别
        map.addControl(new BMap.MapTypeControl()) // 添加地图类型控件
        map.setCurrentCity('广州')
        map.enableScrollWheelZoom(true)
        var mk = new BMap.Marker(point)
        map.addOverlay(mk)
        map.panTo(point)
      }
    },
    mounted () {
      this.initBMap()
    }
  }
</script>
<style>
  #myBMap {
    height: 500px;
    width: 500px;
    margin: auto;
    border: 1px solid #666666;
  }
</style>
