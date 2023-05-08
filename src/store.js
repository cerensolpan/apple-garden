import { createStore } from "vuex";
import { appleGenerator } from "./utils/appleGenerator";

const store = createStore({
  state: {
    isShaking: false,
    apples: appleGenerator(8),
  },
  mutations: {
    setIsShaking(state, shaking) {
      state.isShaking = shaking;
    },
    shakeTree(state) {
      let treeApples = state.apples.filter((apple) => apple.status === "tree");
      treeApples.forEach(() => {
        // Select random apples to drop
        let dropAppleIndex = Math.floor(Math.random() * treeApples.length);
        treeApples[dropAppleIndex].status = "ground";
      });
    },
  },
  actions: {
    shakeTree({ commit, state }) {
      if (state.isShaking) return;
      commit("setIsShaking", true);
      setTimeout(() => {
        commit("shakeTree");
        commit("setIsShaking", false);
      }, 3000);
    },
  },
});

export default store;
