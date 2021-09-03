<template>
  <h1>Tooltip 示例</h1>
  <Demo :component="Tooltip1Demo"></Demo>
</template>

<script lang="ts">
import Tooltip1Demo from '../demoInstance/Tooltip/Tooltip1.demo.vue'
import Demo from '../Demo.vue';
export default {
name: "TooltipDemo",
  components: {Demo},
  setup(){
  return {Tooltip1Demo}
  }
}
</script>

<style scoped>

</style>
