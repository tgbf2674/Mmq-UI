<template>
  <h1>Input示例</h1>
  <Demo :component="Input1Demo"/>
  <Demo :component="Input2Demo"/>
  <Demo :component="Input3Demo"/>
  <Demo :component="Input4Demo"/>
  <Demo :component="Input5Demo"/>
  <Demo :component="Input6Demo"/>
  <Demo :component="Input7Demo"/>
  <Demo :component="Input8Demo"/>
</template>

<script lang="ts">
import Demo from '../Demo.vue';
import Input1Demo from '../demoInstance/Input/Input1.demo.vue'
import Input2Demo from '../demoInstance/Input/Input2.demo.vue'
import Input3Demo from '../demoInstance/Input/Input3.demo.vue'
import Input4Demo from '../demoInstance/Input/Input4.demo.vue'
import Input5Demo from '../demoInstance/Input/Input5.demo.vue'
import Input6Demo from '../demoInstance/Input/Input6.demo.vue'
import Input7Demo from '../demoInstance/Input/Input7.demo.vue'
import Input8Demo from '../demoInstance/Input/Input8.demo.vue'
import {onMounted} from 'vue';
import addADom from '../../utils/addADom';
export default {
  components: {Demo},
  setup() {
    onMounted(() => {
      addADom()
    });
    return {Input1Demo, Input2Demo, Input3Demo, Input4Demo, Input5Demo, Input6Demo, Input7Demo, Input8Demo};
  }
};
</script>

<style lang="scss" scoped>
</style>
