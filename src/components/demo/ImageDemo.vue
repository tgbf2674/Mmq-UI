<template>
  <h1>Image 示例</h1>
  <Demo :component="Image1Demo"></Demo>
</template>

<script lang="ts">
import Demo from '../Demo.vue'
import Image1Demo from '../demoInstance/Image1.demo.vue'
export default {
  name: 'ImageDemo',
  components: {Demo},
  setup(){
    return {Image1Demo}
  }
}
</script>

<style scoped>

</style>
