<template>
  <h1>Input示例</h1>
  <Demo :component="Input1Demo"/>
  <Demo :component="Input2Demo"/>
  <Demo :component="Input3Demo"/>
  <Demo :component="Input4Demo"/>
  <Demo :component="Input5Demo"/>
  <Demo :component="Input6Demo"/>
</template>

<script lang="ts">
import Demo from './Demo.vue';
import Input1Demo from './Input1.demo.vue'
import Input2Demo from './Input2.demo.vue'
import Input3Demo from './Input3.demo.vue'
import Input4Demo from './Input4.demo.vue'
import Input5Demo from './Input5.demo.vue'
import Input6Demo from './Input6.demo.vue'
export default {
  components: {Demo},
  setup() {
    return {Input1Demo, Input2Demo, Input3Demo, Input4Demo, Input5Demo, Input6Demo};
  }
};
</script>

<style lang="scss" scoped>
</style>
