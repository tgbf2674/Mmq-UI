<template>
  <h1>Loading 示例</h1>
  <Demo :component="Loading1Demo"></Demo>
  <Demo :component="Loading2Demo"></Demo>
</template>

<script>
import Demo from '../Demo.vue'
import Loading1Demo from '../demoInstance/Loading/Loading1.demo.vue'
import Loading2Demo from '../demoInstance/Loading/Loading2.demo.vue'
import {onMounted} from 'vue'
import addADom from '../../utils/addADom'
export default {
  name: 'LoadingDemo',
  components: {Demo},
  setup(){
    onMounted(() => {
      addADom()
    });
    return {
      Loading1Demo,Loading2Demo
    }
  }
}
</script>

<style scoped>

</style>
