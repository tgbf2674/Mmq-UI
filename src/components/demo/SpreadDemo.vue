<template>
  <h1>Spread示例</h1>
  <Demo :component="Spread1Demo"/>
  <Demo :component="Spread2Demo"/>
</template>

<script lang="ts">
import Spread1Demo from '../demoInstance/Spread/Spread1.demo.vue';
import Spread2Demo from '../demoInstance/Spread/Spread2.demo.vue';
import Demo from '../Demo.vue';

export default {
  name: 'SpreadDemo',
  components: {Demo},
  setup() {
    return {
      Spread1Demo, Spread2Demo
    };
  }
};
</script>
