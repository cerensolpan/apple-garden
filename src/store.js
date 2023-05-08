import { createStore } from "vuex";
import { appleGenerator } from "./utils/appleGenerator";

const store = createStore({
  state: {
    isShaking: false,
    apples: appleGenerator(8),
    countInBasket: 0,
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
        // Move them to basket after 1 sec
        setTimeout(() => {
          treeApples[dropAppleIndex].status = "basket";
          state.countInBasket = state.apples.filter(
            (apple) => apple.status === "basket"
          ).length;
        }, 1000);
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
