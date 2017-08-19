<template>
    <div class="sideBar">
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
    </div>
</template>

<script>
  import OtherTip from './OtherTip.vue'
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
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only  添加scoped属性限制css只能在本模板用 -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../assets/css/mix.styl"
  .sideHead
    height: 150px
    background:#00a2ea
    box-sizing:border-box
    padding:rem(20)
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
</style>
