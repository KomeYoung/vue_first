/*
 * @Author: your name
 * @Date: 2021-06-16 16:28:43
 * @LastEditTime: 2021-06-30 15:48:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /myvue/src/router/index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import HelloWorld2 from '../components/HelloWorld2.vue'
import HelloWorld3 from '../components/page/HelloWorld3.vue'
import HelloWorld4 from '../components/page/HelloWorld4.vue'
import HelloWorld5 from '../components/page/HelloWorld5.vue'
import HelloWorld6 from '../components/page/HelloWorld6.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/HelloWorld2',
      name: 'HelloWorld2',
      component: HelloWorld2
    },
    {
      path: '/HelloWorld3',
      name: 'HelloWorld3',
      component: HelloWorld3
    },
    {
      path: '/HelloWorld4',
      name: 'HelloWorld4',
      component: HelloWorld4
    },
    {
      path: '/HelloWorld5',
      name: 'HelloWorld5',
      component: HelloWorld5
    },
    {
      path: '/HelloWorld6',
      name: 'HelloWorld6',
      component: HelloWorld6
    }
  ]
})
