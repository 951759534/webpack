/* eslint-disable eol-last */
/**
 * Created by K550jk on 2017/6/5.
 */
import * as types from './mutation-types'
import axios from 'axios'
export const actions = {
  getLatestArticles ({ commit }) {
    /* shop.getProducts(products => {
     /!* commit(types.RECEIVE_PRODUCTS, { products })  *!/
     }) */
    axios.get('api/news/latest').then(function (res) {
      commit(types.RECEIVE_LATESTARTICLES, { 'latestArticles': res.data });
      localStorage.setItem('latestArticles', JSON.stringify(res.data));
    }).catch(function (erro) {
      commit(types.RECEIVE_LATESTARTICLES, {
        'latestArticles': {
          'erro': erro
        }
      })
      console.log(erro);
    });
  },
  getNextArticles ({ commit }, { date }) {
    axios.get('api/news/before/' + date).then((res) => {
      commit(types.RECEIVE_NEXTTARTICLES, {'nextArticles': res.data})
    }).catch((erro) => {
      console.log(erro)
    })
  },
  changeLoadNext ({commit}) {
    commit(types.CHANGE_LOADNEXT, {})
  },
  changeLoadStart ({commit}) {
    commit(types.CHANG_LOADSTART, {})
  },
  changeSideBar ({commit}) {
    commit(types.CHANGE_SIDEBAR, {})
  },
  getSideList ({ commit }) {
    axios.get('api/themes').then((res) => {
      commit(types.SIDELIST, {
        'sideList': res.data.others
      })
    }).catch((erro) => {
      console.log(erro)
    })
  }
 }
