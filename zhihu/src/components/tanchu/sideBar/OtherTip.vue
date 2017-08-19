<template>
    <div class="OtherTip">
      <i :class="icon" class="iconStyle"></i>
      <span class="tipWord">{{message}}</span>
    </div>
</template>

<script>
  export default {
    name: 'OtherTip',
    data () {
      return {
      }
    },
    props: {
      icon: {
        type: String
      },
      message: {
        type: String
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only  添加scoped属性限制css只能在本模板用 -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../assets/css/mix.styl"
  .iconStyle
  .tipWord
    color:#ffffff
    display:inline-block
    margin-left:rem(9)
</style>
