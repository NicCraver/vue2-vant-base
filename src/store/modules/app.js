const state = {
  count: 0
};

const mutations = {
  SET_COUNT: (state, count) => {
    state.count += 1;
  }
};

const actions = {
  setCount({ commit }, count) {
    commit("SET_COUNT", count);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
