<!--
 * @Author: your name
 * @Date: 2021-07-07 14:20:13
 * @LastEditTime: 2021-07-07 17:56:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue_first/src/components/demo/top.vue
-->
<template>
  <div class="bg">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'DemoTop',
  props: {
    msg: {
      type: String,
      default: '右'
    }
  }
}

</script>

<style lang="stylus" scoped>
  .bg
    background:#daaca0
    color : #fff
    justify-content:center
    align-items :center
    font-size: 0.46rem
    display: flex
</style>
