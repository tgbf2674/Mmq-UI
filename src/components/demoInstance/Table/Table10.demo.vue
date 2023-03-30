<demo>
带斑马纹的表格
</demo>

<template>
  <h4>利用 rowClassName 自定义带斑马纹的表格。</h4>
  <MqTable class="mqTableStriped" :row-class-name="(record, index) => (index % 2 === 1? 'table-striped' : null)" :columns="columns" :data-source="data"></MqTable>
</template>

<script lang="ts">
import MqTable from '../../../lib/MqTable.vue';
import {reactive} from 'vue';
export default {
  name: 'Table1.demo.vue',
  components: {
    MqTable
  },
  setup() {
    const data = reactive([
      {key: '1', name: '胡彦斌', age: 32, address: '西湖区湖底公园1号',},
      {key: '2', name: '胡彦祖', age: 32, address: '西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号',},
      {key: '3', name: '胡彦祖', age: 42, address: '西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号',},
      {key: '4', name: '胡彦祖', age: 42, address: '西湖区湖底公园1西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号',},
    ])
    const columns = reactive([
      {title: '姓名', dataIndex: 'name', key: 'name'},
      {title: '年龄', dataIndex: 'age', key: 'age', width: 200},
      {title: '住址', dataIndex: 'address', key: 'address', ellipsis: 'true'}
    ])
    return{
      data, columns
    }
  }
}
</script>

<style lang="scss" scoped>
.mqTableStriped :deep(.table-striped) td {
  background-color: #fafafa;
}
</style>
