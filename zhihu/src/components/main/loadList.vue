<template>
    <div class="load-list">
      <div class="load-wrapper">
        <h1 class="list-time-detail">{{listTitle}}</h1>
        <ul class="list-content-wrapper">
          <li v-for=" listContent in listContents" class="listContent">
            {{listContent}}
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
                    '星期一',
                    '星期二',
                    '星期三',
                    '星期四',
                    '星期五',
                    '星期六',
                    '星期七'
                    ]
                if (now.getFullYear() === titleDate.getFullYear() && now.getMonth() === titleDate.getMonth() && now.getDate() === titleDate.getDate()) {
                  return '今日新闻';
                } else {
                  return titleDate.getMonth() + '月' + titleDate.getDay() + '日' + '     ' + weeksArray[titleDate.getDay()];
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
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only  添加scoped属性限制css只能在本模板用 -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../assets/css/mix.styl"
    .load-list
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
            border-radius:rem(5)
            background: #ffffff
            border:rem(1) solid #eaeaea
            border-bottom:rem(1) solid #d0d0d0
</style>
