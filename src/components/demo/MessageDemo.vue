<template>
  <h1>Message 示例</h1>
  <Demo :component="Message1Demo"></Demo>
  <Demo :component="Message2Demo"></Demo>
</template>

<script lang="ts">
import Message1Demo from '../demoInstance/Message/Message1.demo.vue'
import Message2Demo from '../demoInstance/Message/Message2.demo.vue'
import Demo from '../Demo.vue'
import {onMounted} from 'vue';
import addADom from '../../utils/addADom';
export default {
name: "MessageDemo",
  components: {Demo},
  setup(){
    onMounted(() => {
      addADom()
    });
  return {
    Message1Demo,Message2Demo
  }
  }
}
</script>

<style scoped>

</style>
