<template>
<h1>使用示例</h1>
  <Demo :component="Tag1Demo"></Demo>
</template>

<script lang="ts">
import Tag1Demo from '../demoInstance/Tag/Tag1.demo.vue'
import Demo from '../Demo.vue'
export default {
name: "TagDemo",
  components:{
  Demo
  },
  setup(){
  return {
    Tag1Demo
  }
  }
}
</script>

<style scoped>

</style>
