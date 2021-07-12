<!--
 * @Author: your name
 * @Date: 2021-07-07 14:20:13
 * @LastEditTime: 2021-07-09 15:55:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue_first/src/components/demo/top.vue
-->
<template>
  <div class="bg" @click="handleClick">
    {{msg}}
  </div>
</template>

<script>
import {EventBus} from '../../module/VueEvent'
export default {
  name: 'DemoTop',
  props: {
    msg: {
      type: String,
      default: '底部默认值'
    }
  },
  // methods: {
  //   handleClick: function () {
  //     EventBus.$emit('send', 'aaa')
  //   }
  // },
  methods: {
    handleClick: function () {
      // this.msg = '222'
      EventBus.$emit('send', 'from fun1')
    }
  }
}

</script>

<style lang="stylus" scoped>
  .bg
    background:#d65636
    color : #fff
    justify-content:center
    align-items :center
    font-size: 0.46rem
    display: flex
</style>
