<template>
  <div>
    <v-main-header>header</v-main-header>
    <div class="v-main-swiper-wraper">
      <v-main-swiper :imageInfos = "lateArticles.top_stories">

      </v-main-swiper>
    </div>
  </div>
</template>

<script>
  /* eslint-disable no-unused-vars */

  import header from '@/components/v-main-header.vue';
  import swiper from '@/components/v-main-swiper.vue';
  import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'index',
  data () {
      return {
      }
  },
  components: {
      'v-main-header': header,
      'v-main-swiper': swiper
  },
  created () {
    this.$store.dispatch('getLatestArticles');
  },
  computed: {
    ...mapGetters({
      lateArticles: 'latestArticles'
    })
  }
}
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
</style>
