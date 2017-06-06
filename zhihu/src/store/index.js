/**
 * Created by K550jk on 2017/6/5.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import { state, mutations } from './mutations'
import { actions } from './action';
import { getters } from './getters'
Vue.use(Vuex);
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
