<template>
  <div>
    <vue-datepicker-local v-model="range"/>
    <div class="picker-box">
      <!--<datepicker v-model="date" :range="true" language="cn" @select="getMyDate"></datepicker>-->
    </div>
    <!--右边按钮不能点击-->
    <datepicker v-model="value" mode="daterange"></datepicker>
    <date-picker v-model="time2" range confirm-text="完成" :confirm="true"></date-picker>
  </div>
</template>

<script>
  //
  import VueDatepickerLocal from 'vue-datepicker-local'
  // 不兼容SSR
  //  import datepicker from 'vue-date'
  import DatePicker from 'vue2-datepicker'
  export default {
    components: {
      VueDatepickerLocal,
      DatePicker
//      datepicker
    },
    data () {
      return {
        date: [],
        range: [new Date(), new Date()],
        value: ['2017-02-01', '2017-02-05'],
        time2: '',
        shortcuts: [
          {
            text: 'Today',
            start: new Date(),
            end: new Date()
          }
        ]
      }
    },
    watch: {
      date (newVal, oldVal) {
        console.log(newVal)
        console.log(oldVal)
      },
      time2 (newVal, oldVal) {
        console.log(newVal)
        console.log(oldVal)
      }
    },
    methods: {
      disabledDate () {
        return false
      },
      getMyDate (val) {
        console.log('aaa')
      }
    },
    created () {
    }
  }
</script>

<style>
  .picker-box {
    width: 500px;
  }

  .picker-box .date-list li .message.selected .bg {
    background-color: red;
  }
</style>
