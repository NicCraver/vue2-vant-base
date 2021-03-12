const state = {
  todos: []
};

const mutations = {
  SET_TODO: (state, todos) => {
    state.todos = todos;
  }
};

const actions = {
  setTodo({ commit }, todos) {
    commit("SET_TODO", todos);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
