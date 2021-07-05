<!--
 * @Author: your name
 * @Date: 2021-07-01 11:46:27
 * @LastEditTime: 2021-07-01 11:58:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue_first/src/components/page/Fun2.vue
-->
<template>
  <div>

  </div>
</template>

<script>
import {EventBus} from '../../module/VueEvent'
export default {
  name: 'Fun2',
  data: function () {
    return {
      ss: 1
    }
  },
  mounted () {
    EventBus.$on('send', (msg) => {
      console.log(msg)
    })
    // EventBus.$on('send', (msg) => {
    //   // this.msg = msg
    //   console.log(msg)
    // })
  }
}

</script>
