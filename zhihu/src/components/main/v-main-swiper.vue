<template>
    <div class="v-main-swiper">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for=" imageInfo in imageInfos" :key= "imageInfo.id" class="img-wrapper">
          <div :style="{ backgroundImage : 'url('+imageInfo.image + ')'}" class="swiper-image swiper-lazy" ></div>
          <div class="swiper-mask"></div>
          <h2 class="img-title">
            {{imageInfo.title}}
          </h2>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
  import { swiper } from 'vue-awesome-swiper'
    export default {
        name: 'v-main-swiper',
      data () {
        return {
            swiperOption: {
            notNextTick: true,
            autoplay: 3000,
            autoplayDisableOnInteraction: false,
            direction: 'horizontal',
            grabCursor: true,
            setWrapperSize: true,
            mousewheelControl: false,
            observeParents: true,
            scrollbarHide: true,
            preloadImages: false,
            touchReleaseOnEdges: true,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            resistanceRatio: '0'
          }
        }
      },
        props: {
            imageInfos: Array
        },
        components: {
          swiper
        },
        computed: {
        swiper () {
          return this.$refs.mySwiper.swiper
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only  添加scoped属性限制css只能在本模板用 -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../assets/css/mix.styl"
  .v-main-swiper
    .img-wrapper
      position:relative
      .swiper-mask
        position:absolute
        left:0
        top:0
        height:rem(300)
        width:100%
        background-image: -webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.7)),color-stop(40%,rgba(0,0,0,.1)),to(rgba(0,0,0,.1)));
      .swiper-image
        height:rem(300)
        background-repeat:no-repeat
        background-position:center
        background-size:cover
        opacity .9
      .img-title
        position:absolute
        left:50%
        width:90%
        transform:translateX(-50%)
        bottom:rem(30)
        color:white
        font-weight: 500
</style>
