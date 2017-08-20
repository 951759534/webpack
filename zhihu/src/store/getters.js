/**
 * Created by K550jk on 2017/6/5.
 */
export const getters = {
  allArticles: (state) => {
    return state.allArticles
  },
  loadNext: (state) => {
    return state.loadNext
  },
  loadStart: (state) => {
    return state.loadStart
  },
  sideBar: (state) => {
    return state.sideBar
  },
  sideList: (state) => {
    return state.sideList
  }
};
