<template>
    <div class="main-list-wrapper" ref="mainList">
      <div class="main-list-hook">
          <div class="v-main-swiper-wraper">
            <v-main-swiper :imageInfos = "lateArticles.top_stories"></v-main-swiper>
          </div>
          <div class="main-list">
            <v-load-list :list-date = "lateArticles.date" :list-contents = "lateArticles.stories"></v-load-list>
          </div>
      </div>
    </div>
</template>

<script>
  import mainSwiper from '@/components/main/v-main-swiper.vue';
  import loadList from '@/components/main/loadList.vue'
  import BScroll from 'better-scroll'
  export default {
        name: 'main-list',
        data () {
            return {
            }
        },
        props: {
          lateArticles: {
          }
        },
        components: {
          'v-main-swiper': mainSwiper,
          'v-load-list': loadList
        },
        created () {
          this.$nextTick(() => {
            console.log(this.$refs.mainList)
            this.mainlist = new BScroll(this.$refs.mainList, {
              scrollY: true
            })
          })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only  添加scoped属性限制css只能在本模板用 -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../assets/css/mix.styl"
  .main-list-wrapper
    overflow:hidden
    position:fixed
    top:rem(60)
    bottom:0
    left:0
    right:0
    background: #f2f2f2;
    .main-list
      padding:rem(10) rem(15)
</style>
