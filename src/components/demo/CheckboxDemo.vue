<template>
  <h1>Checkbox示例</h1>
  <Demo :component="checkboxDemo1"/>
  <Demo :component="checkboxDemo2"/>
  <Demo :component="checkboxDemo3"/>
</template>

<script lang="ts">
import checkboxDemo1 from '../demoInstance/Checkbox/Checkbox1.demo.vue'
import checkboxDemo2 from '../demoInstance/Checkbox/Checkbox2.demo.vue'
import checkboxDemo3 from '../demoInstance/Checkbox/Checkbox3.demo.vue'
import Demo from '../Demo.vue';
export default {
  name: 'Checkbox',
  components: {Demo},
  setup() {
    return {checkboxDemo1, checkboxDemo2, checkboxDemo3}
  }
}
</script>

<style scoped>

</style>
