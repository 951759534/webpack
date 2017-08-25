/* eslint-disable no-extend-native */
/**
 * Created by K550jk on 2017/6/5.
 */
import * as types from './mutation-types'
export const mutations = {
  [types.RECEIVE_LATESTARTICLES] (state, { latestArticles }) {
    if (!latestArticles.erro) {
      state.allArticles = [];
      state.allArticles[0] = latestArticles
    } else {
      state.allArticles[0] = JSON.parse(localStorage.getItem('latestArticles'))
    }
    state.loadStart = false
    state.isIndex = true
  },
  [types.RECEIVE_NEXTTARTICLES] (state, {nextArticles}) {
    state.allArticles.push(nextArticles)
    state.loadNext = !state.loadNext
  },
  [types.CHANGE_LOADNEXT] (state) {
    state.loadNext = !state.loadNext
  },
  [types.CHANG_LOADSTART] (state) {
    state.loadStart = !state.loadStart
  },
  [types.CHANGE_SIDEBAR] (state) {
    state.sideBar = !state.sideBar
  },
  [types.SIDELIST] (state, {sideList}) {
    state.sideList = sideList;
  },
  [types.GET_THEME] (state, { themeList }) {
    state.allArticles[0] = themeList;
    console.log(themeList);
    state.sideBar = false;
  }
};
export const state = {
  allArticles: Array,
  loadNext: false,
  loadStart: false,      //  加载前和加载中状态
  sideBar: false,
  sideList: Array,
  isIndex: false
};
