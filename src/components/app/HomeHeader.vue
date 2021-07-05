<!--
 * @Author: your name
 * @Date: 2021-07-02 16:57:06
 * @LastEditTime: 2021-07-05 14:29:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue_first/src/components/app/HomeHeader.vue
-->
<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe62d;</div>
    </div>
    <div class="header-center">
      <span class="iconfont">&#xe608;</span>
      输入城市/景点
    </div>
    <div class="header-right">
      城市
      <span class="iconfont icon-right">&#xe62e;</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>

.header{
  display: flex;
  height: 0.86rem;
  color:#fff;
  font-size: 0.16rem;
  background: $bgColor;
}
.header-left{
  line-height: 0.86rem;
  width: 0.64rem;
}
  .back-icon
    text-align: center
    font-size: 0.4rem

.header-center{
  margin-top: 0.12rem;
  background: white;
  padding-left: 0.2rem
  color: #000;
  height: 0.62rem;
  line-height: 0.62rem;
  flex: 1;
}

.header-right{
  line-height: 0.86rem;
  text-align: center;
  width: 1.24rem;
}
.icon-right
    margin-left:-0.08rem
    font-size: 0.24rem
</style>
