<template>
  <div class="basket">
    <img class="basket__img" src="@/assets/basketImg.svg" />
    <span v-if="countInBasket !== 0" class="basket__count">{{
      countInBasket
    }}</span>
  </div>
</template>

<script>
import "./style.css";
import { computed } from "vue";
import store from "../../store";

export default {
  name: "BasketComponent",

  setup() {
    return {
      countInBasket: computed(() => store.state.countInBasket),
    };
  },
};
</script>
