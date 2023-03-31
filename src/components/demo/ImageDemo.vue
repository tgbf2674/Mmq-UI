<template>
  <h1>Image 示例</h1>
  <Demo :component="Image1Demo"></Demo>
  <Demo :component="Image2Demo"></Demo>
</template>

<script lang="ts">
import Demo from '../Demo.vue'
import Image1Demo from '../demoInstance/Image/Image1.demo.vue'
import Image2Demo from '../demoInstance/Image/Image2.demo.vue'
import {onMounted} from 'vue';
import addADom from '../../utils/addADom';
export default {
  name: 'ImageDemo',
  components: {Demo},
  setup(){
    onMounted(() => {
      addADom()
    });
    return {Image1Demo,Image2Demo}
  }
}
</script>

<style scoped>

</style>
