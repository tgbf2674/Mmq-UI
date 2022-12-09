<template>
  <h1>Tooltip 示例</h1>
  <Demo :component="Tooltip1Demo"></Demo>
  <Demo :component="Tooltip2Demo"></Demo>
  <Demo :component="Tooltip3Demo"></Demo>
</template>

<script lang="ts">
import Tooltip1Demo from '../demoInstance/Tooltip/Tooltip1.demo.vue'
import Tooltip2Demo from '../demoInstance/Tooltip/Tooltip2.demo.vue'
import Tooltip3Demo from '../demoInstance/Tooltip/Tooltip3.demo.vue'
import Demo from '../Demo.vue';
export default {
name: "TooltipDemo",
  components: {Demo},
  setup(){
  return {Tooltip1Demo, Tooltip2Demo, Tooltip3Demo}
  }
}
</script>

<style scoped>

</style>
