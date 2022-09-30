<template>
  <h1>backTop 组件示例</h1>
  <Demo :component="BackTop1Demo"></Demo>
</template>

<script lang="ts">
import Demo from "../Demo.vue";
import BackTop1Demo from "../demoInstance/BackTop/BackTop1.demo.vue";
export default {
  name: "Alert",
  components: { Demo },
  setup() {
    return { BackTop1Demo };
  },
};
</script>

<style scoped>
</style>
