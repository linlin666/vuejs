<template>
  <div>
    <div @click="clickMe">点我</div>
  </div>
</template>
<script>
  export default {
    data () {
      return {}
    },
    methods: {
      clickMe () {
        this.$emit('myEvent')
      }
    }
  }
</script>
