<template>
  <div>
    <div class="form">
      <input
        class="form__input"
        placeholder="How many apples should be on the tree?"
        type="number"
        v-model="inputValue"
        @keydown.enter="setNumberOfApple(inputValue)"
      />

      <div class="form__btn">
        <Button text="Save" @click="setNumberOfApple(inputValue)" />
        <Button text="Reset" @click="reset()" />
      </div>
    </div>
  </div>
</template>

<script>
import "./style.css";
import { computed, ref } from "vue";
import store from "../../../store";
import Button from "../Button/index.vue";

export default {
  name: "InputGroupComponent",
  components: {
    Button,
  },
  setup() {
    const inputValue = ref();
    function reset() {
      store.dispatch("reset");
    }
    function setNumberOfApple() {
      inputValue.value !== undefined &&
        store.dispatch("setNumberOfApple", { numberOfApple: inputValue.value });
    }

    return {
      inputValue,
      numberOfApple: computed(() => store.state.numberOfApple),
      reset,
      setNumberOfApple,
    };
  },
};
</script>
