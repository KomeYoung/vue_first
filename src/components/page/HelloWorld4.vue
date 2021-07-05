<!--
 * @Author: your name
 * @Date: 2021-06-29 16:30:43
 * @LastEditTime: 2021-06-30 15:10:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue_first/src/components/page/HelloWorld4.vue
-->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>{{ msg }}</h3>
    <input/>
    <button @click="handleClick2">传值</button>
    <button ref="hello2" @click="handleClick">点击111</button>
    <!-- <button-counter  v-bind:content="item" v-for="item in list" :key="item.id"></button-counter> -->
    <button-counter  :content="111"></button-counter>
    <button-counter @click.native="nativeClick"  @change="handleChange" ref="one" :content="5"></button-counter>
    <button-counter @change="handleChange" ref="two" :content="2"></button-counter>
    <div>{{total}}</div>
  </div>
</template>

<script>
import Vue from 'vue'
// import VueEvent from '../../module/VueEvent'
Vue.component('button-counter', {
  props: {
    content: {
      type: Number,
      required: true
    }
  },
  data: function () {
    return {
      count: this.content
    }
  },
  methods: {
    clickButton: function () {
      // this.count++
      // VueEvent.$emit('hehe', '123')
      // this.$emit('change')
      // alert(count+'')
    }
  },
  template: '<li @click = "clickButton">{{count}}</li>'
}
)
export default {
  name: 'HelloWorld3',
  data () {
    return {
      msg: 'Welcome333 to Your Vue.js App',
      msg2: '11',
      msg3: '<h3>菜鸟教程</h3>',
      total: 0,
      list: []
    }
  },
  methods: {
    p_alert: function () {
      alert('1111')
      // console.log(111)
    },
    handleClick: function () {
      alert(this.$refs.hello2.innerHTML)
    },
    handleChange: function () {
      this.total = this.$refs.one.count + this.$refs.two.count
      // console.log(this.$refs.one.count)
      // console.log(this.$refs.two.count)
    },
    handleClick2: function () {
      // alert('kfjhfjkf')
      // VueEvent.$emit('hehe', '123')
      this.$root.Bus.$emit('hehe', '123')
      // console.log(this.$refs.one.count)
      // console.log(this.$refs.two.count)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
p {
  font-size: 60px;
  color: #3da072;
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
  color: #3da072;
}
.cities{
  background-color: antiquewhite;
  color: #3da072;
  padding: 40px;
}
</style>
