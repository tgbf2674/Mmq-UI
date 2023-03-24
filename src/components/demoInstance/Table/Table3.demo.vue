<demo>
带边框
</demo>

<template>
  <h4>添加表格边框线，页头和页脚。</h4>
  <MqTable :columns="columns" :data-source="data" bordered>
    <template #title>Header</template>
    <template #footer>Footer</template>
  </MqTable>
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
      {key: '2', name: '胡彦祖', age: 42, address: '西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号',},
      {key: '2', name: '胡彦祖', age: 42, address: '西湖区湖底公园1西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号',},
    ])
    const columns = reactive([
      {title: '姓名', dataIndex: 'name', key: 'name'},
      {title: '年龄', dataIndex: 'age', key: 'age'},
      {title: '住址', dataIndex: 'address', key: 'address', ellipsis: 'true'}
    ])
    return{
      data, columns
    }
  }
}
</script>

<style scoped>

</style>
