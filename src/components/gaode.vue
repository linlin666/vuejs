<template>
  <div>
    高德地图
    <div style="width:697px;height:550px;border:#ccc solid 1px; margin: auto" id="container"></div>
  </div>
</template>
<script>
  //  import {MP} from '../map/map'
  import AMap from 'AMap'
  export default {
    data () {
      return {
        msg: '12234'
      }
    },
    created () {
      // 组件创建完后获取数据，这里和1.0不一样，改成了这个样子
//      this.loadMap()
      // this.ready() // 如果在此处直接调用this.ready()方法，将无法加载地图
    },
    methods: {
      init () {
        var map = new AMap.Map('container', {
          resizeEnable: true,
          zoom: 15,
          center: [113.410032, 23.13599] // 23.143631, 113.419560
        })
        var marker = new AMap.Marker({
          position: [113.410032, 23.13599], // marker所在的位置116.480983, 39.989628
          map: map // 创建时直接赋予map属性
        })
        // 也可以在创建完成后通过setMap方法执行地图对象
        marker.setMap(map)
      }
    },
    mounted () {
      this.init()
    }
  }
</script>
<style>
</style>
