const state = {
  name: "name",
  count: 0
};

const mutations = {
  SET_NAME: (state, name) => {
    state.name = name;
  },
  SET_COUNT: (state, count) => {
    state.count += 1;
  }
};

const actions = {
  setName({ commit }, name) {
    commit("SET_NAME", name);
  },
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
