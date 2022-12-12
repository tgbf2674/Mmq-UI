<template>
  <h1>Icon图标</h1>
  <Demo :component="Icon1Demo"/>
  <Demo :component="IconList"/>
</template>

<script lang="ts">
import Demo from '../Demo.vue';
import Icon1Demo from '../demoInstance/Icon/Icon1.demo.vue'
import IconList from '../demoInstance/Icon/IconList.demo.vue';
export default {
  components: {Demo},
  setup() {
    return {Icon1Demo, IconList};
  }
};
</script>

<style lang="scss" scoped>
</style>
