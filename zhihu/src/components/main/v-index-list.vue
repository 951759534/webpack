<template>
    <div class="IndexList">
      <div class="v-main-swiper-wraper">
        <v-main-swiper :imageInfos = "allArticles[0].top_stories"></v-main-swiper>
      </div>
      <div class="main-list">
        <v-load-list v-for="(article,index) in allArticles" :list-date = "article.date" :list-contents = "article.stories" :key = "index" ref="list"></v-load-list>
      </div>
    </div>
</template>

<script>
  import mainSwiper from '@/components/main/v-main-swiper.vue';
  import loadList from '@/components/main/loadList.vue'
  import { mapGetters } from 'vuex'
  export default {
    name: 'IndexList',
    data () {
      return {}
    },
      props: {
        mainlist: {}
      },
    components: {
      'v-main-swiper': mainSwiper,
      'v-load-list': loadList
    },
    computed: {
      ...mapGetters({
        allArticles: 'allArticles'
      })
    },
    updated () {
      this.mainlist.refresh()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only  添加scoped属性限制css只能在本模板用 -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
