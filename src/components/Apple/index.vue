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
      const left = `${apple.position.left}px`;
      const transition =
        apple.status === "ground" && `bottom ${Math.random() * 1.2}s linear`;

      return { bottom, left, transition };
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
