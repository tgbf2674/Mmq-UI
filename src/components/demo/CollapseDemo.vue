<template>
  <h1>Collapse 示例</h1>
  <Demo :component="Collapse1Demo"></Demo>
</template>

<script lang="ts">
import Demo from '../Demo.vue'
import Collapse1Demo from '../demoInstance/Collapse1.demo.vue'
export default {
name: "CollapseDemo",
  components: {Demo},
  setup(){
  return {
    Collapse1Demo
  }
  }
}
</script>

<style scoped>

</style>
