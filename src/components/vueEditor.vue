<template>
  <div>
    <div id="editorElem" style="text-align:left"></div>
    <button @click="getContent">查看内容</button>
  </div>
</template>

<script>
  import E from 'wangeditor'
  export default {
    name: 'editor',
    data () {
      return {
        editorContent: ''
      }
    },
    methods: {
      getContent () {
        alert(this.editorContent)
      }
    },
    mounted () {
      var editor = new E('#editorElem')
      editor.customConfig.onchange = (html) => {
        this.editorContent = html
      }
      editor.customConfig.uploadImgServer = '/upload'
      editor.create()
    }
  }
</script>
