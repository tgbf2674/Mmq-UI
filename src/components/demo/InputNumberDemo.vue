<template>
  <h1>InputNumber示例</h1>
  <Demo :component="InputNumber1"/>
  <Demo :component="InputNumber2"/>
  <Demo :component="InputNumber3"/>
  <Demo :component="InputNumber4"/>
  <Demo :component="InputNumber5"/>
</template>

<script lang="ts">
import Demo from '../Demo.vue';
import InputNumber1 from '../demoInstance/InputNumber/InputNumber1.demo.vue'
import InputNumber2 from '../demoInstance/InputNumber/InputNumber2.demo.vue'
import InputNumber3 from '../demoInstance/InputNumber/InputNumber3.demo.vue'
import InputNumber4 from '../demoInstance/InputNumber/InputNumber4.demo.vue'
import InputNumber5 from '../demoInstance/InputNumber/InputNumber5.demo.vue'
export default {
  components: {Demo},
  setup() {
    return { InputNumber1, InputNumber2, InputNumber3, InputNumber4, InputNumber5};
  }
};
</script>

<style lang="scss" scoped>
</style>
