<demo>
单选
</demo>

<template>
  <h4>选择单行数据时使用色块表示。

    Table 组件提供了单选的支持， 只需要配置 highlight-current-row 属性即可实现单选。 之后由 current-change 事件来管理选中时触发的事件，它会传入 currentRow，oldCurrentRow。 </h4>
  <MqTable @currentChange="handleSelect" highlight-current-row :columns="columns" :data-source="data"></MqTable>
</template>

<script lang="ts">
import MqTable from '../../../lib/MqTable.vue';
import {reactive} from 'vue';
interface User {
  key:string,
  name: string,
  age: number,
  address: string
}
export default {
  name: 'Table1.demo.vue',
  components: {
    MqTable
  },
  setup() {
    const data: User [] = reactive([
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
    const handleSelect = (currentRow: User, oldRow: User) => {
      console.log(currentRow, oldRow)
    }
    return{
      data, columns, handleSelect
    }
  }
}
</script>

<style scoped>

</style>
