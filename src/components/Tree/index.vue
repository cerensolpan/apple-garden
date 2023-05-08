<template>
  <div class="tree" @click="shakeTree">
    <img
      :src="require('@/assets/treeImg.svg')"
      :class="{ shaking: isShaking }"
      id="tree"
    />
    <Apple />
  </div>
</template>

<script>
import "./style.css";
import { computed } from "vue";
import store from "../../store";
import Apple from "../Apple/index.vue";

export default {
  name: "treeComponent",
  components: {
    Apple,
  },
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