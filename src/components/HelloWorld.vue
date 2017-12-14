<template>
  <div class="hello">
    <router-link to="/gaode">高德地图</router-link><br>
    <router-link to="/baiduMap">百度地图</router-link><br/>
    <router-link to="/erweima">二维码</router-link>
    <br/>
    <router-link to="/emit">$emit用法</router-link>
    <br/>
    <router-link to="/scrollTop">测试scrollTop用法</router-link>
    <br/>
    <router-link to="/display">块状排列</router-link>
    <br/>
    <router-link to="/betterScroll">better-scroll</router-link>
    <br/>
    <router-link to="/diyImg">花纹</router-link>
    <br/>
    <router-link to="/slidX">左右滑动</router-link>
    <br/>
    <router-link to="/datePicker">日期选择器</router-link>
    <br/>
    <router-link to="/emoji">emoji表情</router-link>
    <br/>
    <router-link to="/vueEditor">vue-kindeditor</router-link>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
