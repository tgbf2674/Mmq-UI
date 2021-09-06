<template>
<h1>使用示例</h1>
  <Demo :component="Empty1Demo"></Demo>
  <Demo :component="Empty2Demo"></Demo>
  <Demo :component="Empty3Demo"></Demo>
  <Demo :component="Empty4Demo"></Demo>
</template>

<script lang="ts">
import Empty1Demo from '../demoInstance/Empty/Empty1.demo.vue'
import Empty2Demo from '../demoInstance/Empty/Empty2.demo.vue'
import Empty3Demo from '../demoInstance/Empty/Empty3.demo.vue'
import Empty4Demo from '../demoInstance/Empty/Empty4.demo.vue'
import Demo from '../Demo.vue'
export default {
name: "EmptyDemo",
  components: {
  Demo
  },
  setup(){
  return {
    Empty1Demo,Empty2Demo,Empty3Demo,Empty4Demo
  }
  }
}
</script>

<style scoped>

</style>
