<template>
  <div class="slide_page">
    <div class="turnLeft" @click="turnL">向左</div>
    <div class="slide_box">
      <ul :style="{transform:translateX,transition:'all 1s'}">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
      </ul>
    </div>
    <div class="turnRight" @click="turnR">向右</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        arr: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
        translateX: 0,
        translateXnum: 0,
        index: 0,
        width: 244
      }
    },
    computed: {
      /* prevIndex () {
       console.log(this.index)
       if (this.index === this.arr.length - 1) {
       return this.index
       } else if (this.index === 1) {
       return this.index
       }
       } */
    },
    watch: {
      index (val, oval) {
        if (val === 0) {
          this.translateXnum = 18
        } else {
          this.translateXnum = val * this.width
        }
      },
      translateXnum (val, oval) {
        this.translateX = `translateX(-${this.translateXnum - 18}px)`
      }
    },
    methods: {
//    向右
      turnR () {
        if (this.index > this.arr.length - 5) {
          return
        }
        this.index = this.index + 5
      },
//     向左
      turnL () {
        if (this.index === 0) {
          return
        }
        this.index = this.index - 5
      }
    }
  }
</script>

<style scoped lang="scss">
  .slide_page {
    width: 1300px;
    margin: auto;
    .turnLeft, .turnRight {
      position: absolute;
      top: 100px;
    }
    .turnLeft {
      left: 0;
    }
    .turnRight {
      right: 0;
    }
    .slide_box {
      width: 1202px;
      height: 200px;
      overflow: hidden;
      margin: auto;
      position: relative;
      ul {
        padding: 0;
        margin: 0;
        list-style: none;
        width: 10000px;
        height: 186px;
        li {
          width: 226px;
          height: 186px;
          float: left;
          margin-right: 18px;
          box-sizing: border-box;
          border: 1px solid #dedede;
          &:nth-of-type(5) {
            margin-right: 0;
          }
        }
      }
    }
  }
</style>
