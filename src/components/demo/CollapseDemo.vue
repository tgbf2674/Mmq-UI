<template>
  <h1>Collapse 示例</h1>
  <Demo :component="Collapse1Demo"></Demo>
  <Demo :component="Collapse2Demo"></Demo>
  <Demo :component="Collapse3Demo"></Demo>
</template>

<script lang="ts">
import Demo from '../Demo.vue'
import Collapse1Demo from '../demoInstance/Collapse/Collapse1.demo.vue'
import Collapse2Demo from '../demoInstance/Collapse/Collapse2.demo.vue'
import Collapse3Demo from '../demoInstance/Collapse/Collapse3.demo.vue'
export default {
name: "CollapseDemo",
  components: {Demo},
  setup(){
  return {
    Collapse1Demo,Collapse2Demo, Collapse3Demo
  }
  }
}
</script>

<style scoped>

</style>
