import { createStore } from "vuex";

const store = createStore({
  state: {
    isShaking: false,
  },
  mutations: {
    setIsShaking(state, shaking) {
      state.isShaking = shaking;
    },
    shakeTree() {},
  },
  actions: {
    shakeTree({ commit, state }) {
      if (state.isShaking) return;
      commit("setIsShaking", true);
      setTimeout(() => {
        commit("setIsShaking", false);
      }, 3000);
    },
  },
});

export default store;
