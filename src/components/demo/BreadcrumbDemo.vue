<template>
<h1>breadcrumb 示例</h1>
  <Demo :component="Breadcrumb1Demo"></Demo>
  <Demo :component="Breadcrumb2Demo"></Demo>
</template>

<script lang="ts">
import Breadcrumb1Demo from '../demoInstance/Breadcrumb/Breadcrumb1.demo.vue'
import Breadcrumb2Demo from '../demoInstance/Breadcrumb/Breadcrumb2.demo.vue'
import Demo from '../Demo.vue';
import {onMounted} from 'vue';
import addADom from '../../utils/addADom';
export default {
  name: 'BreadcrumbDemo',
  components: {Demo},
  setup(){
    onMounted(() => {
      addADom()
    });
    return{
      Breadcrumb1Demo,Breadcrumb2Demo
    }
  }
}
</script>

<style scoped>

</style>
