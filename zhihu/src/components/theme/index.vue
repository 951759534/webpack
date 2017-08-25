<template>
    <div class="ThemeIndex">
    </div>
</template>

<script>

  export default {
    name: 'ThemeIndex',
    data () {
      return {}
    },
    created () {
      var themeId = this.$route.params.themeId;
      this.$store.dispatch("getThemeList", {
        themeId
      })
    },
    props: {
      'allArticles': {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only  添加scoped属性限制css只能在本模板用 -->
<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
