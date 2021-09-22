<template>
  <h1>Scrollbar 组件示例</h1>
  <Demo :component="Scrollbar1Demo"></Demo>
</template>

<script lang="ts">
import Demo from '../Demo.vue';
import Scrollbar1Demo from '../demoInstance/Scrollbar/Scrollbar1.demo.vue';

export default {
  name: 'Scrollbar',
  components: {Demo},
  setup() {
    return {
      Scrollbar1Demo
    };
  }
};
</script>

<style scoped>

</style>
