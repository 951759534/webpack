<template>
    <div class="main-list-wrapper">
      <div class="v-main-swiper-wraper">
        <v-main-swiper :imageInfos = "lateArticles.top_stories">

        </v-main-swiper>
      </div>
      <div class="main-list">
        <v-load-list :list-date = "lateArticles.date" :list-contents = "lateArticles.stories"></v-load-list>

      </div>
    </div>
</template>

<script>
  import swiper from '@/components/main/v-main-swiper.vue';
  import loadList from '@/components/main/loadList.vue'
  export default {
        name: 'main-list',
        data () {
            return {}
        },
        props: {
          lateArticles: {
          }
        },
        components: {
          'v-main-swiper': swiper,
          'v-load-list': loadList
        },
        created () {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only  添加scoped属性限制css只能在本模板用 -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../assets/css/mix.styl"
  .main-list-wrapper
    position:fixed
    top:rem(60)
    bottom:0
    left:0
    right:0
    background: #f2f2f2;
    .main-list
      padding:rem(10) rem(15)
</style>
