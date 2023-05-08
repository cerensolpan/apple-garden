<template>
  <div class="tree" @click="shakeTree">
    <img
      :src="require('@/assets/treeImg.svg')"
      :class="{ shaking: isShaking }"
      id="tree"
    />
  </div>
</template>

<script>
import "./style.css";
import { computed } from "vue";
import store from "../../store";

export default {
  name: "treeComponent",

  setup() {
    function shakeTree() {
      store.dispatch("shakeTree");
    }

    return {
      isShaking: computed(() => store.state.isShaking),
      shakeTree,
    };
  },
};
</script>
