<template>
  <h1>Alert 组件示例</h1>
  <Demo :component="Alert1Demo"></Demo>
</template>

<script lang="ts">
import Demo from '../Demo.vue'
import Alert1Demo from '../demoInstance/Alert/Alert1.demo.vue'
export default {
  name: 'Alert',
  components: {Demo},
  setup(){
    return {Alert1Demo}
  }
}
</script>

<style scoped>

</style>
