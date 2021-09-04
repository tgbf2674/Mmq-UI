<template>
  <h1>使用示例</h1>
  <Demo :component="Tag1Demo"></Demo>
  <Demo :component="Tag2Demo"></Demo>
  <Demo :component="Tag3Demo"></Demo>
  <Demo :component="Tag4Demo"></Demo>
  <Demo :component="Tag5Demo"></Demo>
</template>

<script lang="ts">
import Tag1Demo from '../demoInstance/Tag/Tag1.demo.vue'
import Tag2Demo from '../demoInstance/Tag/Tag2.demo.vue'
import Tag3Demo from '../demoInstance/Tag/Tag3.demo.vue'
import Tag4Demo from '../demoInstance/Tag/Tag4.demo.vue'
import Tag5Demo from '../demoInstance/Tag/Tag5.demo.vue'
import Demo from '../Demo.vue'
export default {
name: "TagDemo",
  components:{
  Demo
  },
  setup(){
  return {
    Tag1Demo,Tag2Demo,Tag3Demo,Tag4Demo,Tag5Demo
  }
  }
}
</script>

<style scoped>

</style>
