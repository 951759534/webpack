<template>
    <div class="v-main-swiper">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for=" imageInfo in imageInfos" :key= "imageInfo.id">
          <div :style="{ backgroundImage : 'url('+imageInfo.image + ')'}" class="swiper-image swiper-lazy" ></div>
        </swiper-slide>
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
            direction: 'horizontal',
            grabCursor: true,
            setWrapperSize: true,
            paginationClickable: true,
            mousewheelControl: false,
            observeParents: true,
            scrollbarHide: true,
            preloadImages: false,
            touchReleaseOnEdges: true,
            lazyLoading: true
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
  @import "../assets/css/mix.styl"
  .v-main-swiper
    position:relative
    .swiper-image
      height:rem(300)
      background-repeat:no-repeat
      background-position:center
      background-size:cover
</style>
