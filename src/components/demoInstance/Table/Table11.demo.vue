<demo>
紧凑型
</demo>

<template>
  <h4>两种紧凑型的列表，小型列表只用于对话框内。</h4>

  <h5>Middle size table</h5>
  <MqTable size="middle" :columns="columns" :data-source="data"></MqTable>
  <h5>Small size table</h5>
  <MqTable size="small" :columns="columns" :data-source="data"></MqTable>
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

<style scoped>

</style>
