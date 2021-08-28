<template>
  <h1>Radio示例</h1>
  <Demo :component="Radio1Demo"></Demo>
</template>

<script lang="ts">
import Demo from '../Demo.vue'
import Radio1Demo from '../demoInstance/Radio1.demo.vue'
export default {
name: "RadioDemo",
  components: {Demo},
  setup(){
    return {
      Radio1Demo
    }
  }
}
</script>
