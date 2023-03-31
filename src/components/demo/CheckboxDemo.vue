<template>
  <h1>Checkbox示例</h1>
  <Demo :component="checkboxDemo1"/>
  <Demo :component="checkboxDemo2"/>
  <Demo :component="checkboxDemo3"/>
  <Demo :component="checkboxDemo4"/>
  <Demo :component="checkboxDemo5"/>
</template>

<script lang="ts">
import checkboxDemo1 from '../demoInstance/Checkbox/Checkbox1.demo.vue'
import checkboxDemo2 from '../demoInstance/Checkbox/Checkbox2.demo.vue'
import checkboxDemo3 from '../demoInstance/Checkbox/Checkbox3.demo.vue'
import checkboxDemo4 from '../demoInstance/Checkbox/Checkbox4.demo.vue'
import checkboxDemo5 from '../demoInstance/Checkbox/Checkbox5.demo.vue'
import Demo from '../Demo.vue';
import {onMounted} from 'vue';
import addADom from '../../utils/addADom';
export default {
  name: 'Checkbox',
  components: {Demo},
  setup() {onMounted(() => {
    addADom()
  });
    return {checkboxDemo1, checkboxDemo2, checkboxDemo3, checkboxDemo4, checkboxDemo5}
  }
}
</script>

<style scoped>

</style>
