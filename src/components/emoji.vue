<template>
  <div class="myEmoji">
    <h1>Vue-Emoji</h1>
    <div contenteditable="" ref='edit' focus class="contentBox"></div>
    <div contenteditable="" ref='edit2' focus class="contentBox2"></div>
    <button ref='btn' @click='showEmoji = !showEmoji'>emoji</button>
    <vue-emoji
      v-show='showEmoji'
      ref='emoji'
      :unicode='true'
      @select='handleSelect'
      @hide='handleHide'
    ></vue-emoji>
    <button @click='saveText'>发表话题</button>
  </div>
</template>

<script>
  import api from '@/api/api'
  import vueEmoji from 'rui-vue-emoji'
  import 'rui-vue-emoji/dist/vue-emoji.css'
  export default {
    components: {
      vueEmoji
    },
    data () {
      return {
        showEmoji: false
      }
    },
    methods: {
      hide () {
        this.showEmoji = false
      },
      handleHide (e) {
        this.hide()
      },
      handleSelect (img) {
        console.log(img)
        if (img.nodeType === 3) {
          var $img = new Image()
          $img.src = this.$refs.emoji.getImgPathByUnicode(img.textContent)
          let $app1 = this.$refs.edit
          $app1.appendChild($img)
        } else {
//          var unicode = this.$refs.emoji.getUnicodeByImgPath(img.src)
//          var node = document.createTextNode(unicode)
//          let $app3 = this.$refs.edit2
//          $app3.appendChild(node)
        }
        this.hide()
      },
      saveText () {
        console.log(this.$refs.edit.innerHTML)
        let img = document.querySelectorAll('.contentBox img')
        let arr = []
        img.forEach(item => {
          console.log(item)
          let unicode = this.$refs.emoji.getUnicodeByImgPath(item.src)
          arr.push(unicode)
        })
        /* api.postText({
         title: '来吧，测试吧',
         content: ''
         }).then(res => {
         console.log('成功了')
         }) */
      }
    },
    mounted () {
      this.$refs.emoji.appendTo({
        area: this.$refs.edit,
        btn: this.$refs.btn,
        position: 'left right'
      })
      api.testApi().then(res => {
//        console.log(res.data)
      })
    }
  }
</script>

<style lang="scss">
  /*@import 'rui-vue-images/dist/vue-images.css';*/
  .myEmoji {
    height: 600px;
    margin: 100px 0;
    border: 1px solid #ccc;
  }

  .contentBox, .contentBox2 {
    width: 500px;
    height: 200px;
    margin: auto;
    border: 1px solid #000000;
    text-align: left;
    img {
      width: 20px;
      height: 20px;
    }
  }
</style>
