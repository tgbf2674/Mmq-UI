<template>
  <h1>Pagination 示例</h1>
  <Demo :component="PaginationDemo1"></Demo>
  <Demo :component="PaginationDemo2"></Demo>
  <Demo :component="PaginationDemo3"></Demo>
  <h2>事件</h2>
  <table width="100%">
    <tr>
      <th>事件名</th>
      <th>说明</th>
      <th>参数</th>
    </tr>
    <tr>
      <td>changePage</td>
      <td>currentPage 改变时触发</td>
      <td>新当前页</td>
    </tr>
    <tr>
      <td>prevClick</td>
      <td>用户点击上一页按钮改变当前页时触发</td>
      <td>新当前页</td>
    </tr>
    <tr>
      <td>nextClick</td>
      <td>用户点击下一页按钮改变当前页时触发</td>
      <td>新当前页</td>
    </tr>
  </table>
</template>

<script>
import Demo from '../Demo.vue'
import PaginationDemo1 from '../demoInstance/Pagination/Pagination1.demo.vue'
import PaginationDemo2 from '../demoInstance/Pagination/Pagination2.demo.vue'
import PaginationDemo3 from '../demoInstance/Pagination/Pagination3.demo.vue'

export default {
  name: 'PaginationDemo',
  components: {Demo},
  setup() {
    return {
      PaginationDemo1, PaginationDemo2, PaginationDemo3
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
