<template>
  <h1>InputNumber示例</h1>
  <Demo :component="InputNumber1"/>
  <Demo :component="InputNumber2"/>
  <Demo :component="InputNumber3"/>
  <Demo :component="InputNumber4"/>
  <Demo :component="InputNumber5"/>
  <Demo :component="InputNumber6"/>
</template>

<script lang="ts">
import Demo from '../Demo.vue';
import InputNumber1 from '../demoInstance/InputNumber/InputNumber1.demo.vue'
import InputNumber2 from '../demoInstance/InputNumber/InputNumber2.demo.vue'
import InputNumber3 from '../demoInstance/InputNumber/InputNumber3.demo.vue'
import InputNumber4 from '../demoInstance/InputNumber/InputNumber4.demo.vue'
import InputNumber5 from '../demoInstance/InputNumber/InputNumber5.demo.vue'
import InputNumber6 from '../demoInstance/InputNumber/InputNumber6.demo.vue'
import {onMounted} from 'vue';
import addADom from '../../utils/addADom';
export default {
  components: {Demo},
  setup() {
    onMounted(() => {
      addADom()
    });
    return { InputNumber1, InputNumber2, InputNumber3, InputNumber4, InputNumber5, InputNumber6};
  }
};
</script>

<style lang="scss" scoped>
</style>
