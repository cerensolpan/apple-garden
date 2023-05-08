<template>
  <div class="apple" v-for="apple in apples" :key="apple.id">
    <img
      :src="require('@/assets/appleImg.svg')"
      class="apple__img"
      :class="{ shakeApple: isShaking }"
      :style="getAppleStyle(apple)"
    />
  </div>
</template>

<script>
import "./style.css";
import { computed } from "vue";
import store from "../../store";

export default {
  name: "appleComponent",
  setup() {
    function shakeTree() {
      store.dispatch("shakeTree");
    }

    function getAppleStyle(apple) {
      const bottom =
        apple.status === "ground" || apple.status === "basket"
          ? "0px"
          : `${apple.position.bottom}px`;
      const left =
        apple.status === "basket" ? "550px" : `${apple.position.left}px`;
      const visibility = apple.status === "basket" ? "hidden" : "visible";
      const transition =
        apple.status === "ground"
          ? `bottom ${Math.random() * 1.2}s linear`
          : apple.status === "basket"
          ? `left ${Math.random() * 1.5}s linear, visibility 0.5s linear 1.5s`
          : "";

      return { bottom, left, visibility, transition };
    }

    return {
      isShaking: computed(() => store.state.isShaking),
      apples: computed(() => store.state.apples),
      shakeTree,
      getAppleStyle,
    };
  },
};
</script>
