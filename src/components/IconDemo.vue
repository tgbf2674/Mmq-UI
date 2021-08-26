<template>
  <h1>Icon示例</h1>
  <Demo :component="Icon1Demo"/>
</template>

<script lang="ts">
import Demo from './Demo.vue';
import Icon1Demo from './Icon1.demo.vue';
export default {
  components: {Demo},
  setup() {
    return {Icon1Demo};
  }
};
</script>

<style lang="scss" scoped>
</style>
