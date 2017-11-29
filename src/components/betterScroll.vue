<template>
  <div class="wrapper" ref="wrapper">
    <ul class="content">
      <li v-for="item in data">{{item}}</li>
    </ul>
    <div class="loading-wrapper"></div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  //  import api from '@/api/api'
  export default {
    data () {
      return {
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9]
      }
    },
    mounted () {
      this.loadData()
    },
    methods: {
      loadData () {
        let _data = [8, 7, 6, 5, 4, 3, 2, 1, 0]
        this.data = this.data.concat(_data)
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.wrapper, {
            })
            this.scroll.on('touchend', (pos) => {
              console.log('ss')
              // 下拉动作
              if (pos.y > 50) {
                this.loadData()
              }
            })
          } else {
            this.scroll.refresh()
          }
        })
//        api.inforList().then((res) => {
//        })
      }
    }
  }
</script>
<style lang="scss">
  .wrapper {
    overflow: hidden;
    height: 100vh;
    .content {
      overflow: hidden;
      padding: 0;
      list-style: none;
      li {
        height: 50px;
        line-height: 50px;
        text-align: left;
        border-bottom: 1px solid #ccc;
      }
    }
  }
</style>
