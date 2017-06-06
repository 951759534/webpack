/**
 * Created by K550jk on 2017/6/5.
 */
import * as types from './mutation-types'
export const mutations = {
  [types.RECEIVE_ALLARTICLES] (state, { latestArticles }) {
    if (!latestArticles.erro) {
      localStorage.setItem('lastestArticles', JSON.stringify(latestArticles));
    }
    state.latestArticles = JSON.parse(localStorage.getItem('lastestArticles'))
  }
};
export const state = {
  latestArticles: Object
};
