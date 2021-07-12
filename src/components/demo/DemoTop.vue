<!--
 * @Author: your name
 * @Date: 2021-07-07 14:20:13
 * @LastEditTime: 2021-07-12 09:51:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue_first/src/components/demo/top.vue
-->
<template>
  <div class="bg">
    {{msg}}
    <div class="center">111</div>
  </div>
</template>

<script>
import {EventBus} from '../../module/VueEvent'
export default {
  name: 'DemoTop',
  props: {
    msg: {
      type: String,
      default: '这是默认值'
    }
  },
  mounted () {
    EventBus.$on('send', msg => {
      console.log(msg)
    })
  }

}

</script>

<style lang="stylus" scoped>
  .bg
    background:#a8a7af
    color : #fff
    justify-content:center
    align-items :center
    font-size: 0.46rem
    display: flex
    flex-direction column
  .center
    width 100px
    height 90px
    padding-top 10px
    text-align center
    background red
</style>
