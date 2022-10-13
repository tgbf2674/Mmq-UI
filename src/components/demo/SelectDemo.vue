<template>
  <h1>Select使用示例</h1>
  <Demo :component="SelectDemo1"></Demo>
  <Demo :component="SelectDemo2"></Demo>
  <Demo :component="SelectDemo3"></Demo>
  <Demo :component="SelectDemo4"></Demo>
</template>

<script lang="ts">
import Demo from '../Demo.vue';
import SelectDemo1 from '../demoInstance/Select/Select1.demo.vue'
import SelectDemo2 from '../demoInstance/Select/Select2.demo.vue'
import SelectDemo3 from '../demoInstance/Select/Select3.demo.vue'
import SelectDemo4 from '../demoInstance/Select/Select4.demo.vue'
export default {
  name: 'SelectDemo',
  components: {
    Demo
  },
  setup () {
    return {
      SelectDemo1, SelectDemo2, SelectDemo3, SelectDemo4
    }
  }
}
</script>

<style scoped>

</style>
