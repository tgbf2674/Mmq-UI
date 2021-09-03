<template>
  <h1>Grid示例</h1>
  <Demo :component="Grid1Demo"/>
  <Demo :component="Grid2Demo"/>
  <Demo :component="Grid3Demo"/>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Demo from "../Demo.vue";
import Grid1Demo from '../demoInstance/Grid/Grid1.demo.vue';
import Grid2Demo from '../demoInstance/Grid/Grid2.demo.vue';
import Grid3Demo from '../demoInstance/Grid/Grid3.demo.vue';
export default defineComponent({
  name: "CardDemo",
  components: {Demo},
  setup() {
    return {Grid1Demo,Grid2Demo,Grid3Demo};
  }
});
</script>
