<template>
    <div class="main-list-wrapper" ref="mainList">
      <div ref="mainlistWraper" @touchstart="listTouchStart" @touchmove = "listTouchMove" @touchend = "listTouchEnd">
        <transition name="scale" @before-leave="scaleBefore" @leave="scaleLeave" @after-leave="scaleLeaveAfter">
        <div class="load-tip" ref="loadTip"   v-show="loadingCondition || loadStart">
            <i  ref="loadIcon" :class="{'icon-spinner11' :!loadStart&&loadingCondition, 'icon-spinner8':loadStart||loadOk,'load-icon' :true}"></i>
          </div>
        </transition>
        <!--  <div class="v-main-swiper-wraper">
            <v-main-swiper :imageInfos = "allArticles[0].top_stories"></v-main-swiper>
          </div>
          <div class="main-list">
            <v-load-list v-for="(article,index) in allArticles" :list-date = "article.date" :list-contents = "article.stories" :key = "index" ref="list"></v-load-list>
          </div>-->
        <IndexList :mainlist="mainlist"></IndexList>
      </div>
    </div>
</template>

<script>
  /* eslint-disable no-unused-vars */

  import mainSwiper from '@/components/main/v-main-swiper.vue';
  import loadList from '@/components/main/loadList.vue'
  import BScroll from 'better-scroll'
  import IndexList from '@/components/main/v-index-list.vue';
  import { mapGetters } from 'vuex'

  export default {
        name: 'main-list',
        data () {
            return {
              isTop: false,
              scrollLength: 0,
              touchStart: 0,
              loadFlag: 0,   // 最少滑动多少距离
              standardTop: 20,   //  距离视口的标准高度
              touchLength: 0,     // 大于零  手指下滑
              loadingCondition: false, // 判断是否满足加载条件
              loadOk: false,          //  判断是否加载完成
              mainlist: {}
            }
        },
        props: {
          allArticles: {
            type: Array
          }
        },
        components: {
//          'v-main-swiper': mainSwiper,
//          'v-load-list': loadList,
            'IndexList': IndexList
        },
        created () {
          this.$nextTick(() => {
            let mainList = this.$refs.mainList
            this.mainlist = new BScroll(mainList, {
              bounce: false,
              scrollY: true,
              probeType: 3,
              deceleration: 0.002,
              click: false
            });
            this.mainlist.on('scroll', (pos) => {
              this.currentListHeight = this.$refs.mainlistWraper.offsetHeight - mainList.offsetHeight;
              if (this.currentListHeight <= (-pos.y) && !this.loadNext) {
                this.$store.dispatch('changeLoadNext')
                this.$store.dispatch('getNextArticles', {
                  date: this.allArticles[this.allArticles.length - 1].date
                })
              }
              this.scrollLength = pos.y
            })
          })
        },
        computed: {
          loadNewFlag () {
            return this.scrollLength === 0
          },
          ...mapGetters({
            loadStart: 'loadStart',  //  是否开始加载  true是不是开始加载
            loadNext: 'loadNext'
          }),
          everyListTop () {
            let arr = []
            for (let i = 0; i < this.$refs.list.length; i++) {
              let obj = {
                top: this.$refs.list[i].$el.offsetTop,
                end: this.$refs.list[i + 1] ? this.$refs.list[i + 1].$el.offsetTop : null
              }
              arr.push(obj)
            }
            return arr;
          }
        },
        updated () {
            this.mainlist.refresh()
        },
        methods: {
          scaleBefore (el) {
          },
          scaleLeave (el, done) {
            this.$refs.loadIcon.style.animation = 'loaded .5s forwards'
            setTimeout(done, 500)
          },
          scaleLeaveAfter (el) {
            this.$refs.loadIcon.transition = ''
            el.style.transition = ''
            el.style.transform = 'translateY(-100%)'
            this.$refs.loadIcon.style.animation = ''
            this.loadStart = false
            this.loadOk = false
          },
          listTouchStart (e) {
            if (this.loadNewFlag && this.$refs.loadTip) {
              this.loadingCondition = true;
              this.touchStart = e.touches[0].clientY;
            } else {
              this.loadingCondition = false;
            }
          },
          listTouchEnd (e) {
            this.loadingCondition = false
            if (this.touchLength > 0 && this.$refs.loadTip) {
              this.$refs.loadTip.style.transition = 'all .3s ease'
              if (this.topLength > 0) {
                    this.$refs.loadTip.style.transform = `translateY(${this.standardTop}px)`
                this.$store.dispatch('changeLoadStart')
                this.$store.dispatch('getLatestArticles');
                this.loadOk = true
              } else if (!this.loadStart) {
                    this.$refs.loadTip.style.transform = `translateY(-100%)`
                    setTimeout(
                      () => {
                      this.$refs.loadTip.style.transition = ''
                    }, 300)
                  }
            }
          },
          listTouchMove (e) {
            if (this.loadNewFlag && this.$refs.loadTip) {
              this.current = e.touches[0].clientY;
              this.touchLength = this.current - this.touchStart;
              this.topLength = (this.touchLength / 3 - this.$refs.loadTip.offsetHeight)   //  距离视口的高度
              if (this.touchLength > 0 && !this.loadStart) {
                this.$refs.loadTip.style.transform = `translateY(${this.topLength}px) rotate(${this.touchLength / 5}deg`
              }
            }
          }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only  添加scoped属性限制css只能在本模板用 -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../assets/css/mix.styl"
  @import "../../assets/css/font.styl"
  .main-list-wrapper
    overflow:hidden
    position:fixed
    top:rem(60)
    bottom:0
    left:0
    right:0
    background: #f2f2f2;
    .load-tip
      position:absolute
      left:50%
      margin-left:rem(-18)
      border-radius:50%
      z-index:101
      transform:translateY(-100%)
      font-size:0
      .load-icon
        float:left
        height: rem(36)
        width: rem(36)
        border-radius:50%
        font-size:rem(20)
        color:#00a2ea
        text-align:center
        line-height:rem(36)
        background:#ffffff
      .icon-spinner8
        transform: rotate(0deg)
        animation:loading .8s ease infinite
</style>
