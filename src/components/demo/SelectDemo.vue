<template>
  <h1>Select使用示例</h1>
  <Demo :component="SelectDemo1"></Demo>
  <Demo :component="SelectDemo7"></Demo>
  <Demo :component="SelectDemo3"></Demo>
  <Demo :component="SelectDemo4"></Demo>
  <Demo :component="SelectDemo5"></Demo>
  <Demo :component="SelectDemo6"></Demo>
  <Demo :component="SelectDemo2"></Demo>
</template>

<script lang="ts">
import Demo from '../Demo.vue';
import SelectDemo1 from '../demoInstance/Select/Select1.demo.vue'
import SelectDemo3 from '../demoInstance/Select/Select3.demo.vue'
import SelectDemo4 from '../demoInstance/Select/Select4.demo.vue'
import SelectDemo5 from '../demoInstance/Select/Select5.demo.vue'
import SelectDemo6 from '../demoInstance/Select/Select6.demo.vue'
import SelectDemo7 from '../demoInstance/Select/Select7.demo.vue'
import SelectDemo2 from '../demoInstance/Select/Select2.demo.vue'
export default {
  name: 'SelectDemo',
  components: {
    Demo
  },
  setup () {
    return {
      SelectDemo1, SelectDemo7, SelectDemo3, SelectDemo4, SelectDemo5, SelectDemo6, SelectDemo2
    }
  }
}
</script>

<style scoped>

</style>
