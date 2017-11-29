<template>
  <div>
    二维码
    <!--1. npm istall xkeshi/vue-qrcode-->
    <!--2. import qrcode from 'vue-qrcode'-->
    <!--3. 放到components中-->
    <!--4. 在HTML中使用-->
    <div id="erweima">
      <qrcode value="https://www.baidu.com/" :options="{ size: 200 }"></qrcode>
    </div>
  </div>
</template>
<script>
  import qrcode from '@xkeshi/vue-qrcode'
  export default {
    components: {
      qrcode
    },
    data () {
      return {}
    }
  }
</script>
<style>
  #erweima {
    width: 200px;
    height: 200px;
    margin: auto;
  }
</style>
