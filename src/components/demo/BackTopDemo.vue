<template>
  <h1>backTop 组件示例</h1>
  <Demo :component="BackTop1Demo"></Demo>
</template>

<script lang="ts">
import Demo from "../Demo.vue";
import BackTop1Demo from "../demoInstance/BackTop/BackTop1.demo.vue";
import {onMounted} from 'vue';
import addADom from '../../utils/addADom';
export default {
  name: "Alert",
  components: { Demo },
  setup() {
    onMounted(() => {
      addADom()
    });
    return { BackTop1Demo };
  },
};
</script>

<style scoped>
</style>
