<template>
  <h1>Pagination 示例</h1>
  <Demo :component="PaginationDemo1"></Demo>
</template>

<script>
import Demo from '../Demo.vue'
import PaginationDemo1 from '../demoInstance/Pagination/Pagination1.demo.vue'
export default {
  name: 'PaginationDemo',
  components: {Demo},
  setup(){
    return {
      PaginationDemo1
    }
  }
}
</script>

<style scoped>

</style>
