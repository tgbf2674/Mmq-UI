<template>
  <h1>Swiper示例</h1>
  <Demo :component="Swiper1Demo"></Demo>
  <Demo :component="Swiper2Demo"></Demo>
</template>

<script lang="ts">
import Swiper1Demo from '../demoInstance/Swiper/Swiper1.demo.vue'
import Swiper2Demo from '../demoInstance/Swiper/Swiper2.demo.vue'
import Demo from '../Demo.vue';
export default {
name: "Swiper",
  components: {Demo},
  setup(){
  return {Swiper1Demo,Swiper2Demo}
  }
}
</script>

<style scoped>

</style>
