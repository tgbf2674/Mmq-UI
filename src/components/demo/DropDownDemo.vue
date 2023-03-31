<template>
  <h1>Dropdown 示例</h1>
  <Demo :component="Dropdown1Demo"></Demo>
</template>

<script lang="ts">
import Dropdown1Demo from '../demoInstance/Dropdown/Dropdown1.demo.vue'
import Demo from '../Demo.vue'
import {onMounted} from 'vue';
import addADom from '../../utils/addADom';
export default {
  name: 'DropDownDemo',
  components: {Demo},
  setup(){
    onMounted(() => {
      addADom()
    });
    return {
      Dropdown1Demo
    }
  }
}
</script>

<style scoped>

</style>
