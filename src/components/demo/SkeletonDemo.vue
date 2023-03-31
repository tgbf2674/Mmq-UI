<template>
<h1>使用示例</h1>
  <Demo :component="Skeleton1Demo"></Demo>
  <Demo :component="Skeleton2Demo"></Demo>
  <Demo :component="Skeleton3Demo"></Demo>
  <Demo :component="Skeleton4Demo"></Demo>
  <Demo :component="Skeleton5Demo"></Demo>
  <Demo :component="Skeleton6Demo"></Demo>
</template>

<script lang="ts">
import Skeleton1Demo from '../demoInstance/Skeleton/Skeleton1.demo.vue';
import Skeleton2Demo from '../demoInstance/Skeleton/Skeleton2.demo.vue';
import Skeleton3Demo from '../demoInstance/Skeleton/Skeleton3.demo.vue';
import Skeleton4Demo from '../demoInstance/Skeleton/Skeleton4.demo.vue';
import Skeleton5Demo from '../demoInstance/Skeleton/Skeleton5.demo.vue';
import Skeleton6Demo from '../demoInstance/Skeleton/Skeleton6.demo.vue';
import Demo from '../Demo.vue';
import {onMounted} from 'vue';
import addADom from '../../utils/addADom';

export default {
name: "Skeleton",
  components: {Demo},
  setup(){
    onMounted(() => {
      addADom()
    });
    return {
      Skeleton1Demo,Skeleton2Demo,Skeleton3Demo,Skeleton4Demo,Skeleton5Demo,Skeleton6Demo
    }
  }
}
</script>

<style scoped>

</style>
