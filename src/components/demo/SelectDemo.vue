<template>
  <h1>Select使用示例</h1>
  <Demo :component="SelectDemo1"></Demo>
</template>

<script lang="ts">
import Demo from '../Demo.vue';
import SelectDemo1 from '../demoInstance/Select/Select1.demo.vue'
export default {
  name: 'SelectDemo',
  components: {
    Demo
  },
  setup () {
    return {
      SelectDemo1
    }
  }
}
</script>

<style scoped>

</style>
