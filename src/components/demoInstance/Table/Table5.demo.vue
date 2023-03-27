<demo>
固定列
</demo>

<template>
  <h4>横向内容过多时，可选择固定列。

    固定列需要使用 fixed 属性，它接受 Boolean 值。 如果为 true, 列将被左侧固定. 它还接受传入字符串，left 或 right，表示左边固定还是右边固定。</h4>
  <MqTable :columns="columns" :data-source="data">
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
      {key: '3', name: '胡彦祖', age: 42, address: '西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号',},
      {key: '4', name: '胡彦祖', age: 42, address: '西湖区湖底公园1西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号',}
    ])
    const columns = reactive([
      {title: '姓名', dataIndex: 'name', key: 'name', width: 400, fixed: 'left'},
      {title: '年龄', dataIndex: 'age', key: 'age', width: 1500},
      {title: '住址', dataIndex: 'address', key: 'address', width: 1000, fixed: 'right'}
    ])
    return{
      data, columns
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
