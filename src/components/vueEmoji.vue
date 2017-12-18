<template>
  <div class="myEmoji">
    <textarea v-model="inputValue" placeholder="请输入内容"></textarea>
    <div class="content" ref="content" contenteditable="true" placeholder="请输入内容">
      <p v-for="(item,index) in emojiList" :key="index" class="item">
        <span v-html="emoji(item)"></span>
      </p>
      <!--<span v-html="emoji(emojiCode)"></span>-->
    </div>
    <div class="icon clearfix">
      <i class="icon iconfont icon-face" @click="showEmoji = !showEmoji">选择表情</i>
      <input type="button" value="提交" @click="submit"/>
      <transition name="fade" mode="">
        <div class="emoji-box" v-if="showEmoji">
          <vue-emoji
            @select="selectEmoji">
          </vue-emoji>
          <span class="pop-arrow arrow"></span>
        </div>
      </transition>
    </div>
    <div class="getContent">
      <span v-html="emoji(testValue)"></span>
    </div>
  </div>
</template>

<script>
  import vueEmoji from './emoji.vue'
  export default {
    data () {
      return {
        inputValue: '',
        showValue: '',
        emojiCode: '',
        showEmoji: false,
        emojiList: [],
        testValue: ''
      }
    },
    watch: {
      inputValue (val, oval) {
//        console.log(val)
      }
    },
    methods: {
      selectEmoji (code) {
        this.showEmoji = false
        this.emojiList.push(code)
        this.inputValue += code
//        console.log(this.inputValue)
      },
      submit () {
//        this.data.push(this.value)
//        this.value = ''
        let contentBox = this.$refs.content
        this.testValue = contentBox.innerHTML
        let imgs = contentBox.getElementsByTagName('img')
        let imgName = []
        for (let i = 0; i < imgs.length; i++) {
//          console.log(imgs[i].src)
          let path = imgs[i].src
          let _code = `:${path.slice(path.lastIndexOf('/') + 1, -4)}:`
          imgName.push(_code)
        }
//        正则替换<img>标签
//        console.log(this.testValue.replace(/<.*?>/ig, imgName[0]))
//        console.log(this.testValue.replace(/<\s?img[^>]*>/gi, '这是表情'))
//        let arr = ['c', 'f', 'h', 'o']
//        let str = 'uih3eifu6wefhw8wefw6'
        let func = function () {
          let count = 0
          return function () {
            return imgName[count++]
          }
        }
        let replaceFn = func()
        let newStr = this.testValue.replace(/<\s?img[^>]*>/ig, replaceFn)
        let filterHtml = newStr.replace(/<.*?>/ig, '')
        console.log(filterHtml)
      }
    },
    components: {
      vueEmoji
    }
  }
</script>

<style lang="scss">

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .myEmoji {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin: 60px auto;
    width: 500px;
    position: relative;
    textarea {
      width: 500px;
      height: 200px;
      /*position: absolute;
      left: 0;
      opacity: 0;
      z-index: 10;*/
    }
    .content {
      width: 500px;
      height: 200px;
      text-align: left;
      border: 1px solid #dedede;
      &:empty:before {
        content: attr(placeholder);
      }
      &:focus:before {
        content: none;
      }
      p {
        margin: 0;
        padding: 0;
        display: inline-block;
      }
    }
    .icon {
      position: relative;
      margin-top: 20px;
      .iconfont {
        display: inline-block;
        cursor: pointer;
        height: 20px;
      }
      .emoji-box {
        position: absolute;
        z-index: 10;
        left: -10px;
        top: 60px;
        box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.2);
        background: white;
        .el-button {
          position: absolute;
          border: none;
          color: #FF4949;
          right: 12px;
          top: 12px;
          z-index: 10;
        }
        .arrow {
          left: 10px;
        }
      }
      .submit {
        float: right;
      }
    }
    .comment {
      margin-top: 20px;
      .item {
        margin-top: 20px;
        padding: 10px;
        margin: 0;
        border-top: 1px solid #bfcbd9;
      }
    }
    .getContent {
      width: 500px;
      height: 200px;
      p {
        margin: 0;
        padding: 0;
        display: inline-block;
      }
    }
  }

  .clearfix {
    &:after {
      content: '';
      display: block;
      height: 0;
      clear: both;
      visibility: hidden;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0;
  }

  .fade-move {
    transition: transform .4s;
  }

  .list-enter-active, .list-leave-active {
    transition: all .5s;
  }

  .list-enter, .list-leave-active {
    opacity: 0;
    transform: translateX(30px);
  }

  .list-leave-active {
    position: absolute !important;
  }

  .list-move {
    transition: all .5s;
  }
</style>
