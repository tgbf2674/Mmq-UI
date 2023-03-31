<template>
<h1>使用实例</h1>
  <Demo :component="Container1Demo"></Demo>
</template>

<script lang="ts">
import Demo from '../Demo.vue'
import Container1Demo from '../demoInstance/Container/Container1.demo.vue'
import {onMounted} from 'vue';
import addADom from '../../utils/addADom';
export default {
name: "ContainerDemo",
  components: {Demo},
  setup(){
    onMounted(() => {
      addADom()
    });
  return {
    Container1Demo
  }
  }
}
</script>

<style scoped>

</style>
