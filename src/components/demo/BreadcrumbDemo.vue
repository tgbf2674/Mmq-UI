<template>
<h1>breadcrumb 示例</h1>
  <Demo :component="Breadcrumb1Demo"></Demo>
</template>

<script lang="ts">
import Breadcrumb1Demo from '../demoInstance/Breadcrumb/Breadcrumb1.demo.vue'
import Demo from '../Demo.vue';
export default {
  name: 'BreadcrumbDemo',
  components: {Demo},
  setup(){
    return{
      Breadcrumb1Demo
    }
  }
}
</script>

<style scoped>

</style>
