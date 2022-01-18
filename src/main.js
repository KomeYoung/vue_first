/*
 * @Author: your name
 * @Date: 2021-06-16 16:28:43
 * @LastEditTime: 2022-01-18 17:47:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /myvue/src/main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import Demo from './Demo.vue'
// import App from './App.vue'
import AppHome from './AppHome.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style (>= Swiper 6.x)
import 'swiper/swiper-bundle.css'
// import style (<= Swiper 5.x)
// import 'swiper/css/swiper.css'
import './assets/styles/border.css'
import './assets/styles/reset.css'
import './assets/styles/iconfont.css'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

// import Vant from 'vant'
// import 'vant/lib/index.css'
// Vue.use(Vant)

Vue.use(VueAwesomeSwiper /* { default options with global component } */)
Vue.config.productionTip = false
// Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(AppHome),
  data: {
    Bus: new Vue()
  }
}).$mount('#app')
