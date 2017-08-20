<template>
    <div class="sideBar"  ref="sideBar">
        <div class="sideWrapper">
          <div class="sideHead">
            <ul class="sideTopWrapper">
              <li class="denglu"><img :src="isLogin ? '':unLoginIcon" alt=""></li>
              <li class="loginTip">请登录</li>
            </ul>
            <div class="other">
              <OtherTip class="otherTip" :icon="OtherTipIcon1" :message="OtherTipMessage1"></OtherTip>
              <OtherTip class="otherTip" :icon="OtherTipIcon2" :message="OtherTipMessage2"></OtherTip>
            </div>
          </div>
          <div class="index">
            <i class="icon-home selected homeStyle"></i>
            <span class="selected">首页</span>
          </div>
          <ul class="side-list">
            <li v-for="list in sideList" class="list-style">{{list.name}} <i class="icon-plus plusStyle"></i></li>
          </ul>
        </div>
    </div>
</template>

<script>
  import OtherTip from './OtherTip.vue'
  import { mapActions, mapGetters } from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    name: '',
    data () {
      return {
        isLogin: false,
        unLoginIcon: 'https://pic1.zhimg.com/da8e974dc_is.jpg',
        OtherTipIcon1: "icon-star-full",
        OtherTipMessage1: "我的收藏",
        OtherTipIcon2: "icon-download3",
        OtherTipMessage2: "离线下载"
      }
    },
    components: {
      'OtherTip': OtherTip
    },
    created () {
      this.$nextTick(() => {
        console.log(this.$refs.sideBar)
        this.sideBar = new BScroll(this.$refs.sideBar, {
          bounce: false,
          scrollY: true,
          probeType: 3,
          deceleration: 0.002,
          click: false
        });
      })
    },
    computed: {
    },
   props: {
      sideList: {}
   },
    updated () {
      this.$nextTick(() => {
        this.sideBar.refresh()
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only  添加scoped属性限制css只能在本模板用 -->
<style lang="stylus" rel="stylesheet/stylus" >
  @import "../../../assets/css/mix.styl"
  .sideBar
    position:absolute
    top:0
    bottom:0
    right:0
    left:rem(280)
    overflow:hidden
  .sideWrapper
    .sideHead
      height: rem(150)
      background:#00a2ea
      box-sizing:border-box
      padding:rem(30)
    .sideTopWrapper
      display:flex
      .denglu
        height: rem(30)
        width: rem(30)
        img
          height:100%
          width:100%
          border-radius:50%
      .loginTip
        margin-left: 20px
        color:#ffffff
        font-size:rem(18)
        line-height:rem(30)
    .other
      display:flex
      margin-top:rem(39)
      .otherTip
        flex:1
    .index
      margin:rem(30) 0 0 rem(20)
      font-size:rem(18)
      .homeStyle
        margin-right: rem(20)
        margin-left:rem(10)
    .selected
      color:#00a2ea
  .side-list
    width:100%
    margin-top:rem(25)
    .list-style
      box-sizing:border-box
      height: rem(30)
      width:100%
      padding:0 rem(30) rem(20) rem(20)
      margin-bottom:rem(22)
      font-size:rem(18)
      .plusStyle
        font-size:rem(14)
        float:right
        color:#868686
</style>
