<template>
  <h1>Tabs 示例</h1>
  <Demo :component="Tabs1Demo" />
  <Demo :component="Tabs2Demo" />
  <Demo :component="Tabs3Demo" />
</template>

<script>
import Tabs from '../../lib/Tabs.vue'
import Tab from '../../lib/Tab.vue'
import Demo from '../Demo.vue'
import Tabs1Demo from '../demoInstance/Tab/Tabs1.demo.vue'
import Tabs2Demo from '../demoInstance/Tab/Tabs2.demo.vue'
import Tabs3Demo from '../demoInstance/Tab/Tabs3.demo.vue'
import {onMounted} from 'vue'
import addADom from '../../utils/addADom'
export default {
name: "tabsDemo",
  components: {
  Tab,Tabs,Demo
  },
  setup(){
    onMounted(() => {
      addADom()
    });
    return {
      Tabs1Demo, Tabs2Demo, Tabs3Demo
    }
  }
}
</script>

<style scoped>

</style>
