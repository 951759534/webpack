<template>
  <div>
    <v-main-header></v-main-header>
    <div class="v-main-list-wrapper" v-if="showFlag">
      <v-main-list :allArticles="allArticles">
      </v-main-list>

    </div>
  </div>
</template>

<script>
  /* eslint-disable no-unused-vars */

  import header from '@/components/main/v-main-header.vue';
  import list from '@/components/main/v-main-list.vue';
  import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'index',
  data () {
      return {
      }
  },
  components: {
      'v-main-header': header,
      'v-main-list': list
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

<style  lang="stylus" rel="stylesheet/stylus" scoped>
</style>
