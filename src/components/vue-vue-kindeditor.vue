<template>
  <div id="hello">
    <h1>vue-kindedtior demo</h1>
    <editor id="editor_id" height="500px" width="700px" :content="editorText"
            :afterChange="afterChange()"
            pluginsPath="/static/kindeditor/plugins/"
            :loadStyleMode="false"
            @on-content-change="onContentChange"></editor>

    <button @click="saveTopic">提交</button>

    <!--<editor id="editor_id2" height="500px" width="700px" :content="editorText"
            :afterChange="afterChange()"
            pluginsPath="/static/kindeditor/plugins/"
            :loadStyleMode="false"
            @on-content-change="onContentChange2"></editor>-->
  </div>
</template>

<script>
  import api from '../api/api'
  export default {
    name: 'hello',
    data () {
      return {
        editorText: '',
        editorText2: ''
      }
    },
    created () {
    },
    methods: {
      onContentChange (val) {
        this.editorText = val
        console.log(this.editorText)
      },
      saveTopic () {
        console.log('点击提交')
        api.postText({
          title: '来吧，测试吧',
          content: this.editorText
        }).then(res => {
          console.log('成功了')
        })
      },
      onContentChange2 (val) {
        this.editorText2 = val
      },
      afterChange () {
      }
    }
  }
</script>

<style>
  #hello {
    float: left;
  }
</style>
