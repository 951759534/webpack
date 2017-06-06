<template>
    <div class="header">
      <div class="nav-bar"></div>
      <h2 class="title">
        {{title}}
      </h2>
      <i class="icon-bell">
      </i>
      <ul class="circle-wrap">
        <li class="circle-icon"></li>
        <li class="circle-icon"></li>
        <li class="circle-icon"></li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: 'v-main-header',
        data () {
            return {
                'title': '首页'
            }
        },
        props: {}
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only  添加scoped属性限制css只能在本模板用 -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../assets/css/mix.styl"
  @import "../assets/css/font.styl"
  .header
    height: rem(72)
    background:#00a2ea;
    font-size: 0
    display:flex
    .nav-bar
      margin: rem(26) rem(20)
      display:inline-block
      border-top: 4px solid #ffffff
      border-bottom: 12px double #ffffff
      padding: rem(2) 0
      flex:0 0 rem(25)
      width: rem(25)
    .title
      display:inline-block
      line-height: rem(24)
      flex:1
      margin-left: rem(33)
      margin-top: rem(24)
      font-size: rem(22)
      font-weight:500
      color:#ffffff
    .icon-bell
      font-size:rem(20)
      color:#ffffff;
      margin:rem(26) rem(60) 0 0
    .circle-wrap
      display:inline-block
      margin:rem(24) rem(20) 0 0
      .circle-icon
        height: rem(6)
        width: rem(6)
        margin-bottom: rem(3)
        border-radius:50%
        background:#ffffff
</style>
