<template>
  <h1>Table 组件示例 </h1>
  <Demo :component="Table1Demo"></Demo>
  <Demo :component="Table3Demo"></Demo>
  <Demo :component="Table2Demo"></Demo>
  <Demo :component="Table4Demo"></Demo>
  <Demo :component="Table5Demo"></Demo>
</template>

<script lang="ts">
import Table1Demo from '../demoInstance/Table/Table1.demo.vue'
import Table2Demo from '../demoInstance/Table/Table2.demo.vue'
import Table3Demo from '../demoInstance/Table/Table3.demo.vue'
import Table4Demo from '../demoInstance/Table/Table4.demo.vue'
import Table5Demo from '../demoInstance/Table/Table5.demo.vue'
import Demo from '../Demo.vue';
export default {
  name: 'TableDemo',
  components: {
    Demo
  },
  setup () {
    return {
      Table1Demo, Table2Demo, Table3Demo, Table4Demo, Table5Demo
    }
  }
}
</script>

<style scoped>

</style>
