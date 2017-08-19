<template>
    <div class="tanChu">
      <transition name="fade">
       <div class="mask" @click="changeSideBar" v-show="sideBar"></div>
      </transition>
      <transition name="slide" mode="out-in">
        <div class="sideBar" v-show="sideBar">
          <sideBar></sideBar>
        </div>
      </transition>
    </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import sideBar from '@/components/tanchu/sideBar/sideBar'
  export default {
    name: 'tanChu',
    data () {
      return {}
    },
    computed: {
      ...mapGetters({
        sideBar: 'sideBar'
      })
    },
    created () {
    },
    methods: {
      changeSideBar () {
          this.$store.dispatch("changeSideBar")
      }
    },
    components: {
      'sideBar': sideBar
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only  添加scoped属性限制css只能在本模板用 -->
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/css/font.styl"
  .tanChu
    .mask
      position:absolute
      top:0
      bottom:0
      left:0
      right:0
      background:rgba(0,0,0,.6)
      transition:opacity 1s
    .fade-enter,.fade-leave-to
      opacity: 0
    .sideBar
      position:absolute
      top:0
      bottom:0
      left:0
      width: 280px
      background:#ffffff
      transition:transform .2s linear
      transform:translateX(0)
    .slide-enter,.slide-leave-active
      transform:translateX(-100%)
    .slide-leave
      transform:translateX(0)


</style>
