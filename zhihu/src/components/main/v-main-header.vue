<template>
    <div class="header">
      <div class="nav-bar" @click="showSideBar">
        <div class="nav-bar-center"></div>
      </div>
      <h2 class="title">
        {{title}}
      </h2>
      <i class="icon-bell" v-if="isIndex">
      </i>
      <ul class="circle-wrap" v-if="isIndex">
        <li class="circle-icon"></li>
        <li class="circle-icon"></li>
        <li class="circle-icon"></li>
      </ul>
    </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
    export default {
        name: 'v-main-header',
        data () {
            return {
                'title': '首页'
            }
        },
        props: {
        },
        methods: {
          showSideBar () {
            this.$store.dispatch('changeSideBar');
          }
        },
      computed: {
        ...mapGetters({
          isIndex: 'isIndex'
        })
      }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only  添加scoped属性限制css只能在本模板用 -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../assets/css/mix.styl"
  @import "../../assets/css/font.styl"
  .header
    height: rem(60)
    padding:rem(20) rem(22)
    background:#00a2ea;
    display:flex
    .nav-bar
      display:inline-block
      flex:0 0 rem(24)
      &::before
        content:''
        display:block
        border-bottom:rem(2) solid #ffffff
      &::after
        content:''
        display:block
        border-bottom:rem(2) solid #ffffff
      .nav-bar-center
        margin:rem(6) 0 rem(6)
        border-bottom:rem(2) solid #ffffff
    .title
      display:inline-block
      line-height: rem(24)
      flex:1
      margin-left: rem(33)
      margin-top:rem(-2)
      font-size:rem(19)
      font-weight:500
      color:#ffffff
    .icon-bell
      font-size:rem(18)
      color:#ffffff;
      margin:rem(1) rem(33) 0 0
    .circle-wrap
      display:inline-block
      .circle-icon
        height: rem(5)
        width: rem(5)
        margin-bottom: rem(3)
        border-radius:50%
        background:#ffffff
</style>
