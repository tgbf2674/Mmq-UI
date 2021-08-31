<demo>
自动轮播
</demo>
<template>
  <Swiper auto>
    <div style="height: 300px;width: 100%;background: #3f51b5"></div>
    <div style="height: 300px;width: 100%;background: #2b85e4"></div>
    <div style="height: 300px;width: 100%;background: #303133"></div>
    <div style="height: 300px;width: 100%;background: #19be6b"></div>
  </Swiper>
</template>

<script>
import Swiper from '../../lib/Swiper.vue'
export default {
name: "Swiper2.demo",
  components: {Swiper}
}
</script>

<style scoped>

</style>
