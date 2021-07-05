<!--
 * @Author: your name
 * @Date: 2021-06-16 16:28:43
 * @LastEditTime: 2021-07-05 10:35:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /myvue/src/App.vue
-->
<template>
  <div id="app2">
    <home-header></home-header>
  <div>
    <!-- <router-link :to="{name: 'HelloWorld'}">HelloWorld</router-link>
    <router-link :to="{name: 'HelloWorld2'}">HelloWorld2</router-link> -->

    <!-- <router-link to='HelloWorld'>HelloWorld</router-link>
    <router-link to='HelloWorld2'>HelloWorld2</router-link>
    <router-link to='HelloWorld3'>HelloWorld3</router-link>
    <router-link to='HelloWorld4'>HelloWorld4</router-link>
    <router-link to='HelloWorld5'>HelloWorld5</router-link>
    <router-link to='HelloWorld6'>HelloWorld6</router-link>
    <router-link to='Fun1'>Fun1</router-link>
    <router-link to='Fun2'>Fun2</router-link> -->
  </div>
     <!-- 对应的组件内容渲染到router-view中 -->
    <router-view></router-view>
  </div>
</template>

<script>
import Fun1 from './components/page/Fun1.vue'
import HomeHeader from './components/app/HomeHeader.vue'
export default {
  name: 'App',
  components: {
    Fun1,
    HomeHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f00e2c;
  margin-top: 6px;
}
</style>
