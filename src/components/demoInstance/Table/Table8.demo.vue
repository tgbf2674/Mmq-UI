<demo>
可排序
</demo>

<template>
  <h4>对某一列数据进行排序，通过指定列的 sort 函数即可启动排序按钮。<code>sort: function(rowA, rowB) { ... }</code>， rowA、rowB 为比较的两个行数据。</h4>
  <MqTable :columns="columns" :data-source="data"></MqTable>
</template>

<script lang="ts">
import MqTable from '../../../lib/MqTable.vue';
import {reactive} from 'vue';
type TableDataType = {
  key: string;
  name: string;
  age: number;
  address: string;
};
export default {
  name: 'Table1.demo.vue',
  components: {
    MqTable
  },
  setup() {
    const data = reactive([
      {key: '1', name: '胡彦斌', age: 35, address: '西湖区湖底公园1号',},
      {key: '2', name: '胡彦祖', age: 32, address: '西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号',},
      {key: '3', name: '胡彦祖', age: 47, address: '西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号',},
      {key: '4', name: '胡彦祖', age: 42, address: '西湖区湖底公园1西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号',},
    ])
    const columns = reactive([
      {title: '姓名', dataIndex: 'name', key: 'name'},
      {title: '年龄', dataIndex: 'age', key: 'age', width: 200, defaultSortOrder: 'descend',sort: (a:TableDataType ,b: TableDataType) => a.age - b.age},
      {title: '住址', dataIndex: 'address', key: 'address', ellipsis: 'true',sort: (a:TableDataType ,b: TableDataType) => a.address.length - b.address.length}
    ])
    return{
      data, columns
    }
  }
}
</script>

<style scoped>

</style>
