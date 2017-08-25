<template>
    <div class="load-list">
      <div class="load-wrapper">
        <h1 class="list-time-detail">{{listTitle}}</h1>
        <ul class="list-content-wrapper">
          <li v-for=" (listContent,index) in listContents" class="listContent" :key="index">
            <p class="list-title">
              {{listContent.title}}
            </p>
            <img :src="listContent.images" alt="" class="list-img" height="66" width="66">
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  /* eslint-disable no-unused-vars */

  export default {
        name: 'loadList',
        data () {
            return {
            }
        },
        props: {
            listDate: {
                type: String
            },
            listContents: {
                type: Array
            }
        },
        computed: {
            listTitle () {
              if (!this.listDate) {
                return;
              }
                let now = new Date();
                let titleDate = this.formateDate(this.listDate);
                let weeksArray = [
                    '星期日',
                    '星期一',
                    '星期二',
                    '星期三',
                    '星期四',
                    '星期五',
                    '星期六'
                    ]
                if (now.getFullYear() === titleDate.getFullYear() && now.getMonth() === titleDate.getMonth() && now.getDate() === titleDate.getDate()) {
                  return '今日新闻';
                } else {
                  return (titleDate.getMonth() + 1) + '月' + titleDate.getDate() + '日' + '     ' + weeksArray[titleDate.getDay()];
                }
            }
        },
        methods: {
          formateDate (date) {
            if (typeof date !== 'string') {
              return;
            }
            let newDate = new Date();
            newDate.setFullYear(date.slice(0, 4));
            newDate.setMinutes(date.slice(4, 6));
            newDate.setDate(date.slice(6, 8));
            return newDate;
          }
        },
        created () {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only  添加scoped属性限制css只能在本模板用 -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../assets/css/mix.styl"
    .load-list
      padding:rem(20) rem(20) 0 rem(20)
      .load-wrapper
        .list-time-detail
          padding-left:rem(5)
          margin-bottom: rem(10)
          color: #76787e;
          font-size: rem(16)
          font-weight:500
        .list-content-wrapper
          .listContent
            margin-bottom:rem(15)
            padding:rem(15) rem(6) rem(10)
            border-radius:rem(5)
            background: #ffffff
            border:rem(1) solid #eaeaea
            border-bottom:rem(1) solid #d0d0d0
            display:flex
            .list-title
              flex:1
              font-size:rem(16)
              padding:0 rem(12) 0 rem(6)
</style>
