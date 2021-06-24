<template>
  <h1>Tabs 示例</h1>
  <Demo :component="Tabs1Demo" />
</template>

<script>
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'
import Demo from './Demo.vue'
import Tabs1Demo from './Tabs1.demo.vue'
export default {
name: "tabsDemo",
  components: {
  Tab,Tabs,Demo
  },
  setup(){
    return {
      Tabs1Demo
    }
  }
}
</script>

<style scoped>

</style>
