<template>
  <h1>Alert 组件示例</h1>
  <Demo :component="Alert1Demo"></Demo>
  <Demo :component="Alert2Demo"></Demo>
  <Demo :component="Alert3Demo"></Demo>
  <Demo :component="Alert4Demo"></Demo>
  <Demo :component="Alert5Demo"></Demo>
  <Demo :component="Alert6Demo"></Demo>
  <Demo :component="Alert7Demo"></Demo>
</template>

<script lang="ts">
import Demo from '../Demo.vue'
import Alert1Demo from '../demoInstance/Alert/Alert1.demo.vue'
import Alert2Demo from '../demoInstance/Alert/Alert2.demo.vue'
import Alert3Demo from '../demoInstance/Alert/Alert3.demo.vue'
import Alert4Demo from '../demoInstance/Alert/Alert4.demo.vue'
import Alert5Demo from '../demoInstance/Alert/Alert5.demo.vue'
import Alert6Demo from '../demoInstance/Alert/Alert6.demo.vue'
import Alert7Demo from '../demoInstance/Alert/Alert7.demo.vue'
export default {
  name: 'Alert',
  components: {Demo},
  setup(){
    return {Alert1Demo,Alert2Demo,Alert3Demo,Alert4Demo,Alert5Demo,Alert6Demo,Alert7Demo}
  }
}
</script>

<style scoped>

</style>
