<!--
 * @Author: your name
 * @Date: 2021-06-16 16:28:43
 * @LastEditTime: 2021-06-30 15:46:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /myvue/src/App.vue
-->
<template>
  <div id="app2">
    <img src="./assets/logo.png">

  <div>
    <!-- <router-link :to="{name: 'HelloWorld'}">HelloWorld</router-link>
    <router-link :to="{name: 'HelloWorld2'}">HelloWorld2</router-link>
     -->

    <router-link to='HelloWorld'>HelloWorld</router-link>
    <router-link to='HelloWorld2'>HelloWorld2</router-link>
    <router-link to='HelloWorld3'>HelloWorld3</router-link>
    <router-link to='HelloWorld4'>HelloWorld4</router-link>
    <router-link to='HelloWorld5'>HelloWorld5</router-link>
    <router-link to='HelloWorld6'>HelloWorld6</router-link>

  </div>
     <!-- 对应的组件内容渲染到router-view中 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
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
