<template>
  <h1>Radio示例</h1>
  <Demo :component="Radio1Demo"></Demo>
  <Demo :component="Radio2Demo"></Demo>
  <Demo :component="Radio3Demo"></Demo>
</template>

<script lang="ts">
import Demo from '../Demo.vue'
import Radio1Demo from '../demoInstance/Raido/Radio1.demo.vue'
import Radio2Demo from '../demoInstance/Raido/Radio2.demo.vue'
import Radio3Demo from '../demoInstance/Raido/Radio3.demo.vue'
export default {
name: "RadioDemo",
  components: {Demo},
  setup(){
    return {
      Radio1Demo,Radio2Demo, Radio3Demo
    }
  }
}
</script>
