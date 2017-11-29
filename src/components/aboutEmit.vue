<template>
  <div>
    <sub-emit @myEvent="test"></sub-emit>
  </div>
</template>
<script>
  import subEmit from './subComs/emitTest.vue'
  export default {
    components: {
      subEmit
    },
    data () {
      return {}
    },
    methods: {
      test () {
        console.log('我是父组件的方法')
      }
    },
    created () {
    }
  }
</script>
