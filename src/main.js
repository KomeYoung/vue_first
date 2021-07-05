/*
 * @Author: your name
 * @Date: 2021-06-16 16:28:43
 * @LastEditTime: 2021-07-05 11:07:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /myvue/src/main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/border.css'
import './assets/styles/reset.css'
import './assets/styles/iconfont.css'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app2',
  router,
  components: { App },
  template: '<App/>',
  data: {
    Bus: new Vue()
  }
}).$mount('#app2')
