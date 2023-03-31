<template>
  <h1>Icon图标</h1>
  <quickUse />
  <Demo :component="Icon1Demo"/>
  <Demo :component="Icon2Demo"/>
  <Demo :component="IconList"/>
</template>

<script lang="ts">
import Demo from '../Demo.vue';
import quickUse from '../demoInstance/Icon/quickUse.vue'
import Icon1Demo from '../demoInstance/Icon/Icon1.demo.vue'
import Icon2Demo from '../demoInstance/Icon/Icon2.demo.vue'
import IconList from '../demoInstance/Icon/IconList.demo.vue';
import {onMounted} from 'vue';
import addADom from '../../utils/addADom';
export default {
  components: {Demo, quickUse},
  setup() {
    onMounted(() => {
      addADom()
    });
    return {Icon1Demo, Icon2Demo, IconList};
  }
};
</script>

<style lang="scss" scoped>
</style>
