<template>
<h1>常规用法</h1>
  <Demo :component="Result1Demo"></Demo>
  <Demo :component="Result2Demo"></Demo>
</template>

<script lang="ts">
import Result1Demo from '../demoInstance/Result/Result1.demo.vue'
import Result2Demo from '../demoInstance/Result/Result2.demo.vue'
import Demo from '../Demo.vue';
import {onMounted} from 'vue';
import addADom from '../../utils/addADom';
export default {
  name: 'ResultDemo',
  components: {Demo},
  setup(){
    onMounted(() => {
      addADom()
    });
    return {
      Result1Demo,Result2Demo
    }
  }
}
</script>

<style scoped>

</style>
