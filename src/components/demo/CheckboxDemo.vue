<template>
  <h1>Checkbox示例</h1>
  <Demo :component="checkboxDemo1"/>
</template>

<script lang="ts">
import checkboxDemo1 from '../demoInstance/Checkbox/Checkbox1.demo.vue'
import Demo from '../Demo.vue';
export default {
  name: 'Checkbox',
  components: {Demo},
  setup() {
    return {checkboxDemo1}
  }
}
</script>

<style scoped>

</style>
