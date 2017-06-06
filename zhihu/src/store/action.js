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
      commit(types.RECEIVE_ALLARTICLES, { 'latestArticles': res.data });
    }).catch(function (erro) {
      commit(types.RECEIVE_ALLARTICLES, {
        'latestArticles': {
          'erro': erro
        }
      })
        console.log(erro);
      });
  }
};
