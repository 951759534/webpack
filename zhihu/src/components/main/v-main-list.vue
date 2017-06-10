<template>
    <div class="main-list-wrapper" ref="mainList">
      <div ref="mainlistWraper">
          <div class="v-main-swiper-wraper">
            <v-main-swiper :imageInfos = "allArticles[0].top_stories"></v-main-swiper>
          </div>
          <div class="main-list">
            <v-load-list v-for="(article,index) in allArticles" :list-date = "article.date" :list-contents = "article.stories" :key = "index"></v-load-list>
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
              loadNext: false
            }
        },
        props: {
          allArticles: {
            type: Array
          }
        },
        components: {
          'v-main-swiper': mainSwiper,
          'v-load-list': loadList
        },
        created () {
          this.$nextTick(() => {
            this.mainlist = new BScroll(this.$refs.mainList, {
              momentum: true,
              bounce: false,
              scrollY: true,
              probeType: 2
            });
            this.mainlist.on('scroll', (pos) => {
              this.currentListHeight = this.$refs.mainlistWraper.offsetHeight - this.$refs.mainList.offsetHeight;
              if (this.currentListHeight <= (-pos.y) && !this.loadNext) {
                this.loadNext = true;
                this.$store.dispatch('getNextArticles', {
                  date: this.allArticles[this.allArticles.length - 1].date
                })
              }
            })
          })
        },
        computed: {
        },
        updated () {
          this.mainlist.refresh()
          this.loadNext = false
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
