<demo>
单元格自动省略
</demo>

<template>
  <h4>设置 column.ellipsis 可以让单元格内容根据宽度自动省略。</h4>
  <MqTable :columns="columns" :data-source="data"></MqTable>
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
      {key: '2', name: '胡彦祖', age: 32, address: '西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号',},
      {key: '2', name: '胡彦祖', age: 42, address: '西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号',},
      {key: '2', name: '胡彦祖', age: 42, address: '西湖区湖底公园1西湖区湖底公园1西湖区湖底公园1西湖区湖底公园1西湖区湖底公园1西湖区湖底公园1西湖区湖底公园1西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1西湖区湖底公园1西湖区湖底公园1西湖区湖底公园1西湖区湖底公园1西湖区湖底公园1西湖区湖底公园1西湖区湖底公园1西湖区湖底公园1西湖区湖底公园1西湖区湖底公园1西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号',},
    ])
    const columns = reactive([
      {title: '姓名', dataIndex: 'name', key: 'name'},
      {title: '年龄', dataIndex: 'age', key: 'age', width: 80},
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
