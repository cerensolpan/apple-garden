<template>
  <div class="button">
    <button class="button__btn" type="button">
      {{ text }}
    </button>
  </div>
</template>

<script>
import "./style.css";

export default {
  name: "ButtonComponent",
  props: {
    text: String,
  },
};
</script>
