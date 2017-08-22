<template>
  <div>
    <v-main-header></v-main-header>
      <router-view :allArticles="allArticles" v-if="showFlag">
      </router-view>
    <Tanchu> </Tanchu>
  </div>
</template>

<script>
  /* eslint-disable no-unused-vars */

  import header from '@/components/main/v-main-header.vue';
  import Tanchu from '@/components/tanchu/tanchu.vue'
  import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'index',
  data () {
      return {
      }
  },
  components: {
      'v-main-header': header,
      'Tanchu': Tanchu
  },
  created () {
    this.$store.dispatch('getLatestArticles');
  },
  computed: {
    ...mapGetters({
      allArticles: 'allArticles'
    }),
    showFlag () {
       return (this.allArticles instanceof Array)
    }
  }
}
</script>

<style  lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/css/mix.styl"
  .sideBar
    transition:all 1s
</style>
