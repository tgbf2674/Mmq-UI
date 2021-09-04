<template>
<h1>常规用法</h1>
  <Demo :component="Result1Demo"></Demo>
</template>

<script lang="ts">
import Result1Demo from '../demoInstance/Result/Result1.demo.vue'
import Demo from '../Demo.vue';
export default {
  name: 'ResultDemo',
  components: {Demo},
  setup(){
    return {
      Result1Demo
    }
  }
}
</script>

<style scoped>

</style>
