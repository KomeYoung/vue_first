<!--
 * @Author: your name
 * @Date: 2021-06-29 16:30:43
 * @LastEditTime: 2021-06-30 19:30:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue_first/src/components/page/HelloWorld4.vue
-->
<template>
    <div class="B">
      <p>插槽+组件接受</p>
      <h1>  {{ msg }}</h1>
      <div>
        <p-view>
          <h1 slot="header1">111</h1>
             <h1 slot="header2">111</h1>
          <h1>222</h1>
        </p-view>

      </div>
    </div>
</template>
<script>
import {EventBus} from '../../module/VueEvent'
import Vue from 'vue'
Vue.component('p-view', {
  props: ['content'],
  template: '<div><slot name="header1"></slot><slot name="header2"></slot><div>222</div></div>'
})
export default {
  name: 'HelloWorld5',
  data () {
    return {
      msg: ''
    }
  },
  mounted () {
    // 为EventBus添加监听时间 msg，
    // callback 参数（msg）用于接收触发监听事件传递过来的value
    EventBus.$on('msg', (msg) => {
      this.msg = msg
      console.log(msg)
    })
  }
}
</script>
