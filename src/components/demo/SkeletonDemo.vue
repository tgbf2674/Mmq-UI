<template>
<h1>使用示例</h1>
  <Demo :component="Skeleton1Demo"></Demo>
</template>

<script lang="ts">
import Skeleton1Demo from '../demoInstance/Skeleton/Skeleton1.demo.vue';
import Demo from '../Demo.vue';

export default {
name: "Skeleton",
  components: {Demo},
  setup(){
    return {
      Skeleton1Demo
    }
  }
}
</script>

<style scoped>

</style>
