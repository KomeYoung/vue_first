<!--
 * @Author: your name
 * @Date: 2021-06-16 16:28:43
 * @LastEditTime: 2022-01-12 00:26:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /myvue/src/App.vue
-->
<template>
  <div id="app3" class="father">
    <demo-top :msg="top" class="children"></demo-top>
    <div class="bgcenter">
      <demo-left class="center-left-right"></demo-left>
      <demo-center style="flex:4"></demo-center>
      <demo-right class="center-left-right"></demo-right>
    </div>
    <demo-bottom :msg="bottom" class="children"></demo-bottom>
    <router-view></router-view>
  </div>
</template>

<script>
import DemoTop from './components/demo/DemoTop.vue'
import DemoBottom from './components/demo/DemoBottom.vue'
import DemoLeft from './components/demo/DemoLeft.vue'
import DemoCenter from './components/demo/DemoCenter.vue'
import DemoRight from './components/demo/DemoRight.vue'
export default {
  name: 'Demo',
  components: {
    DemoTop,
    DemoBottom,
    DemoLeft,
    DemoCenter,
    DemoRight
  },
  data () {
    return {
      top: '这是父组件传来的头部数据',
      bottom: '父组件的底部数据'
    }
  }
}
</script>

<style lang="stylus" scoped>
.father
  display: flex
  flex-direction: column
  position:fixed
  top :0
  left :0
  bottom :0
  right :0
.bgcenter
  margin-top:5px
  margin-bottom :5px
  flex:3
  display:flex
  background :#3f3
.center-left-right
  flex 1
.children
  flex:1
</style>
