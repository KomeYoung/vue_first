<!--
 * @Author: your name
 * @Date: 2021-06-29 16:30:43
 * @LastEditTime: 2021-06-30 20:06:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue_first/src/components/page/HelloWorld4.vue
-->
<template>
    <div class="A">
      <p>作用域插槽+组件触发+动态组件</p>
        <button @click="change()">change111</button>
        <child>
          <template slot-scope="props">
            <h1>{{props.item}}</h1>
          </template>
        </child>
        <component :is="type"></component>
        <button @click="handleBtnClick">change111</button>
        <div>
          <transition>
            <h1 v-show="isShow">1234567</h1>
          </transition>
          <button @click="handleShow">隐藏显示</button>
        </div>
    </div>
</template>

<script>
import {EventBus} from '../../module/VueEvent'
import Vue from 'vue'
Vue.component('child-one', {
  template: '<div>one</div>'
})
Vue.component('child-two', {
  template: '<h1>two</h1>'
})
Vue.component('child', {
  data: function () {
    return {
      list: [1, 2, 3, 45]
    }
  },
  template: '<div><ul><slot v-for="item in list" :item = item></slot></ul></div>'
})
export default {
  name: 'HelloWorld5',
  data: function () {
    return {
      type: 'child-one',
      isShow: true
    }
  },
  methods: {
    change () {
      // 触发EventBus事件 msg，第二个参数是可传递给监听事件的callback
      EventBus.$emit('msg', 'Hello B!')
    },
    handleBtnClick: function () {
      this.type = this.type === 'child-one' ? 'child-two' : 'child-one'
    },
    handleShow: function () {
      this.isShow = !this.isShow
    }
  },
  destroyed () {
    EventBus.$off('msg')
  }
}
</script>
