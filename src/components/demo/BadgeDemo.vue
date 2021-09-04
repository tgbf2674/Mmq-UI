<template>
  <h1>使用示例</h1>
  <Demo :component="Badge1Demo"></Demo>
  <Demo :component="Badge2Demo"></Demo>
  <Demo :component="Badge3Demo"></Demo>
  <Demo :component="Badge4Demo"></Demo>
</template>

<script lang="ts">
import Badge1Demo from '../demoInstance/Badge/Badge1.demo.vue'
import Badge2Demo from '../demoInstance/Badge/Badge2.demo.vue'
import Badge3Demo from '../demoInstance/Badge/Badge3.demo.vue'
import Badge4Demo from '../demoInstance/Badge/Badge4.demo.vue'
import Demo from '../Demo.vue';
export default {
  name: 'BadgeDemo',
  components: { Demo},
  setup(){
    return {
      Badge1Demo,Badge2Demo,Badge3Demo,Badge4Demo
    }
  }
}
</script>

<style scoped>

</style>
