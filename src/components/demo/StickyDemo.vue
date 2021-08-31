<template>
  <h1>Sticky 示例</h1>
  <Demo :component="Sticky1Demo"></Demo>
</template>

<script lang="ts">
import Sticky1Demo from '../demoInstance/Sticky1.demo.vue'
import Demo from '../Demo.vue';
export default {
name: "StickyDemo",
  components: {Demo},
  setup(){
  return {
    Sticky1Demo
  }
  }
}
</script>

<style scoped>

</style>
