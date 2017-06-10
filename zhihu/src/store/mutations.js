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
  },
  [types.RECEIVE_NEXTTARTICLES] (state, {nextArticles}) {
    state.allArticles.push(nextArticles)
    state.allArticles = state.allArticles.unique()
  }
};
export const state = {
  allArticles: Array
};
