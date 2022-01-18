<!--
 * @Author: your name
 * @Date: 2021-06-16 16:28:43
 * @LastEditTime: 2022-01-18 15:12:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /myvue/src/App.vue
-->
<template>
  <div id="app">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <div>161516</div>
    <el-button>jfkfjkfj</el-button>
      <el-tooltip effect="dark" popper-class="aToolTip" visible-arrow ="false"  placement="right">
        <div slot="content">
          <div
            class="m-b-10"
            v-for="(item, index) in tipList"
            :key="index"
          >
            {{ item.name }}
          </div>
        </div>
          <span class=" f-r" >112212<i
              id="historychannel"
              class="el-icon-loading"
              style="color:#606266;margin:0px 0px;"
              ></i>|
          </span>
      </el-tooltip>
      <span class="el-dropdown-link">
    下拉菜单<i class="el-icon-arrow-up"></i>
  </span>
    <router-link to='HelloWorld'>HelloWorld</router-link>
    <router-link to='HelloWorld2'>HelloWorld2</router-link>
    <router-link to='HelloWorld3'>HelloWorld3</router-link>
    <router-link to='HelloWorld4'>HelloWorld4</router-link>
    <router-link to='HelloWorld5'>HelloWorld5</router-link>
    <router-link to='HelloWorld6'>HelloWorld6</router-link>
    <router-link to='Fun1'>Fun1</router-link>
    <router-link to='Fun2'>Fun2</router-link>
     <!-- 对应的组件内容渲染到router-view中 -->
    <router-view></router-view>
  </div>
</template>

<script>
import Fun1 from './components/page/Fun1.vue'
import HomeHeader from './components/app/HomeHeader.vue'
import HomeSwiper from './components/app/Swiper.vue'
import HelloWorld from './components/page/HelloWorld.vue'
export default {
  name: 'App',
  components: {
    Fun1,
    HomeHeader,
    HelloWorld,
    HomeSwiper
  },
  data () {
    return {
      tipList: [
        {
          name: 'jkfjkf'
        },
        {
          name: '22'
        },
        {
          name: '333'
        }
      ]
    }
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
.aToolTip{
  background: #f00e2c !important;
}
.aToolTip.el-tooltip__popper[x-placement^=right] .popper__arrow::after {
      border-right-color: #66f00e2c;
    }

.aToolTip.el-tooltip__popper[x-placement^=right] .popper__arrow{

  border-right-color: #66f00e2c;

}
</style>
