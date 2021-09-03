<template>
  <h1>使用示例</h1>
  <Demo :component="GuluLink1Demo" />
  <Demo :component="GuluLink2Demo" />
  <Demo :component="GuluLink3Demo" />
  <Demo :component="GuluLink4Demo" />
</template>

<script lang="ts">
import Demo from '../Demo.vue';
import GuluLink1Demo from '../demoInstance/Link/GuluLink1.demo.vue'
import GuluLink2Demo from '../demoInstance/Link/GuluLink2.demo.vue'
import GuluLink3Demo from '../demoInstance/Link/GuluLink3.demo.vue'
import GuluLink4Demo from '../demoInstance/Link/GuluLink4.demo.vue'
export default {
  name: 'LinkDemo',
  components: {Demo},
  setup(){
    return {
      GuluLink1Demo,GuluLink2Demo,GuluLink3Demo,GuluLink4Demo
    }
  }
}
</script>

<style scoped>

</style>
