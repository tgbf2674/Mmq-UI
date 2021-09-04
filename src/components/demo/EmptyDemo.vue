<template>
<h1>使用示例</h1>
  <Demo :component="Empty1Demo"></Demo>
</template>

<script lang="ts">
import Empty1Demo from '../demoInstance/Empty/Empty1.demo.vue'
import Demo from '../Demo.vue'
export default {
name: "EmptyDemo",
  components: {
  Demo
  },
  setup(){
  return {
    Empty1Demo
  }
  }
}
</script>

<style scoped>

</style>
