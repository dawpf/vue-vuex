import Vue from "vue";
import Vuex from "vuex";

import home from "./modules/home"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 100
  },
  mutations: {
    add_count(state, num) {
      state.count += num
    }
  },
  actions: {
    add_count_action(context, num) {
      context.commit('add_count', num)
    }
  },
  modules: {
    home
  }
});
