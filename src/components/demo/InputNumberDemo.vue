<template>
  <h1>InputNumber示例</h1>
  <Demo :component="InputNumber1"/>
  <Demo :component="InputNumber2"/>
</template>

<script lang="ts">
import Demo from '../Demo.vue';
import InputNumber1 from '../demoInstance/InputNumber/InputNumber1.demo.vue'
import InputNumber2 from '../demoInstance/InputNumber/InputNumber2.demo.vue'
export default {
  components: {Demo},
  setup() {
    return {InputNumber1, InputNumber2};
  }
};
</script>

<style lang="scss" scoped>
</style>
