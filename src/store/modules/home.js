// home 模块
export default {
  state: {
    count_home: 500
  },
  mutations: {
    add_count_home(state, num) {
      state.count_home += num
    }
  },
  actions: {
    add_count_home_action(context, num) {
      context.commit('add_count_home', num)
    }
  }
};
