<!--
 * @Author: your name
 * @Date: 2021-07-05 15:42:05
 * @LastEditTime: 2022-01-12 00:24:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue_first/src/components/app/Swiper.vue
-->
<template>
   <div class="wrapper">
    <swiper ref="mySwiper" :options="swiperOption">
    <swiper-slide v-for="image of imageList" :key="image.id">
      <img class="swiper-image" :src="image.imageUrl">
    </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
   </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      imageList: [
        {
          id: '111',
          imageUrl: 'http://img4.imgtn.bdimg.com/it/u=1746392609,3023202045&fm=27&gp=0.jpg'
        },
        {
          id: '222',
          imageUrl: 'http://img4.imgtn.bdimg.com/it/u=1746392609,3023202045&fm=27&gp=0.jpg'
        },
        {
          id: '333',
          imageUrl: 'http://img4.imgtn.bdimg.com/it/u=1746392609,3023202045&fm=27&gp=0.jpg'
        },
        {
          id: '444',
          imageUrl: 'http://img4.imgtn.bdimg.com/it/u=1746392609,3023202045&fm=27&gp=0.jpg'
        },
        {
          id: '555',
          imageUrl: 'http://img4.imgtn.bdimg.com/it/u=1746392609,3023202045&fm=27&gp=0.jpg'
        }
      ],
      swiperOption: {
        autoplay: 1000,
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true,
        loop: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        mousewheelControl: true
        // Some Swiper option/callback...
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet
  background : #fff
.wrapper
  overflow hidden
  width 100%
  height 0
  padding-bottom 63%

  .swiper-image
    width: 100%

</style>
