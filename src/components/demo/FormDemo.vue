<template>
<h1>Form组件示例</h1>
  <Demo :component="Form1Demo"></Demo>
</template>

<script lang="ts">
import Form1Demo from '../demoInstance/Form/Form1.demo.vue'
import Demo from '../Demo.vue';
export default {
  name: 'FormDemo',
  components: {Demo},
  setup(){
    return {
      Form1Demo,
    }
  }
}
</script>

<style scoped>

</style>
