/*
 * @Author: your name
 * @Date: 2021-06-16 16:28:43
 * @LastEditTime: 2021-06-21 11:38:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /myvue/src/router/index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import HelloWorld2 from '../components/HelloWorld2.vue'
import HelloWorld3 from '../components/page/HelloWorld3.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/HelloWorld2',
      name: 'HelloWorld2',
      component: HelloWorld2
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld3',
      component: HelloWorld3
    }
  ]
})
