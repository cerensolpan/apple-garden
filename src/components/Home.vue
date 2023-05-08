<template>
  <div class="container">
    <div class="container__animation">
      <Tree />
    </div>
  </div>
</template>

<script>
import Tree from "./Tree/index.vue";

export default {
  name: "HomeComponent",
  components: {
    Tree,
  },
};
</script>

<style scoped>
.container {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #1d976c;
  background: -webkit-linear-gradient(to bottom, #99b290, #569340);
  background: linear-gradient(to bottom, #c1edb1, #569340);
}

.container__animation {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 60px;
}
</style>
