<!--
 * @Author: your name
 * @Date: 2021-07-01 11:33:09
 * @LastEditTime: 2021-07-02 15:06:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue_first/src/components/page/Fun1.vue
-->

<template>
 <div>
  <div>{{msg}}</div>
  <div>
    <content-item content = '111' @click.native ='haha'></content-item>
    <button @click="handleClick">点击</button>
    <chachao>
      <template slot-scope="props">
        <h1>{{props.item}}</h1>

      </template>

    </chachao>
  </div>
 </div>
</template>

<script>
import Vue from 'vue'
import {EventBus} from '../../module/VueEvent'
Vue.component('content-item', {
  template: '<div>{{ss}}</div>',
  props: {
    content: {
      type: String,
      required: true
    }
  },
  data: function () {
    return {
      ss: 'dddd'
    }
  }
})
Vue.component('chachao', {
  template: '<div><ul><slot v-for="item in list" :item = item></slot></ul></div>',
  data: function () {
    return {
      list: [1, 2, 3, 4]
    }
  }

})

export default {
  name: 'Fun1',
  data: function () {
    return {
      msg: '111'
    }
  },
  methods: {
    handleClick: function () {
      // this.msg = '222'
      EventBus.$emit('send', 'from fun1')
    },
    haha: function () {
      alert('2345yui')
    }
  }
}
</script>
