<!--
 * @Author: your name
 * @Date: 2022-01-13 11:28:35
 * @LastEditTime: 2022-01-18 15:04:19
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue_demo/src/components/page/HelloWorld.vue
-->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>

    <van-button type="primary">主要按钮</van-button>
<van-button type="info">信息按钮</van-button>
<van-button type="default">默认按钮</van-button>
<van-button type="warning">警告按钮</van-button>
<van-button type="danger">危险按钮</van-button>

<van-grid :column-num="2" icon-size="38">
  <van-grid-item v-for="value in 6" :key="value" icon="https://img01.yzcdn.cn/vant/apple-2.jpg" text="文字"  url="https://www.baidu.com/s?ie=UTF-8&wd=npm%20%E5%AE%89%E8%A3%85Vant%E6%B2%A1%E6%9C%89%E4%BD%9C%E7%94%A8"/>
</van-grid>

   <van-grid :border="true" :column-num="3" square>
  <van-grid-item>
    <van-image src="https://img01.yzcdn.cn/vant/apple-1.jpg" />
  </van-grid-item>
  <van-grid-item>
    <van-image src="https://img01.yzcdn.cn/vant/apple-2.jpg" />
  </van-grid-item>
  <van-grid-item>
    <van-image src="https://img01.yzcdn.cn/vant/apple-3.jpg" />
  </van-grid-item>
</van-grid>

  </div>
</template>

<script>
// import VueEvent from '../module/VueEvent'
// import { Grid, GridItem } from 'vant'
// Vue.use(Grid)
// Vue.use(GridItem)

import { Image as VanImage, Button, Grid, GridItem } from 'vant'

// import { Button } from 'vant'

export default {
  name: 'HelloWorld',
  components: {
    [Button.name]: Button,
    [GridItem.name]: GridItem,
    [VanImage.name]: VanImage,
    [Grid.name]: Grid
  },
  data () {
    return {
      msg: 'Welcome111 to Your Vue.js App11'
    }
  },
  mounted: function () {
    this.$root.Bus.$on('hehe', content => {
      // Hub接收事件
      // this.msg = content
      console.log(content)
    })
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  color: rgb(43, 30, 158);
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #a8a7af;
}
/deep/ .van-grid-item__icon+.van-grid-item__text {
      margin-top: 0px;
}

/deep/ .van-grid-item__text {
    color: red;
    font-size: 14px;
    line-height: 1.5;
    word-break: break-all;
}

/deep/ .van-grid-item__content {
  padding: 10px 20px;
}
</style>
