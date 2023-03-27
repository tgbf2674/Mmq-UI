<template>
  <h1>Pagination 示例</h1>
  <Demo :component="PaginationDemo1"></Demo>
  <Demo :component="PaginationDemo2"></Demo>
  <Demo :component="PaginationDemo3"></Demo>
  <MqTable :columns="columns" :data-source="data" bordered>
    <template #title><h2>事件</h2></template>
  </MqTable>
</template>

<script>
import Demo from '../Demo.vue'
import PaginationDemo1 from '../demoInstance/Pagination/Pagination1.demo.vue'
import PaginationDemo2 from '../demoInstance/Pagination/Pagination2.demo.vue'
import PaginationDemo3 from '../demoInstance/Pagination/Pagination3.demo.vue'
import {reactive} from 'vue'

export default {
  name: 'PaginationDemo',
  components: {Demo},
  setup() {
    const data = reactive([
      {key: '1', attr: 'changePage', describe: 'currentPage 改变时触发', params: '新当前页'},
      {key: '2', attr: 'prevClick', describe: '用户点击上一页按钮改变当前页时触发', params: '新当前页'},
      {key: '3', attr: 'nextClick', describe: '用户点击下一页按钮改变当前页时触发', params: '新当前页'}
    ])
    const columns = reactive([
      {title: '参数', dataIndex: 'attr', key: 'attr'},
      {title: '说明', dataIndex: 'describe', key: 'describe'},
      {title: '参数', dataIndex: 'params', key: 'params'}
    ])
    return {
      PaginationDemo1, PaginationDemo2, PaginationDemo3, data, columns
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
