<demo>
自定义单元格
</demo>

<template>
  <h4>对单元格进行自定义操作</h4>
  <MqButton @click="addHandle">add</MqButton>
  <MqTable :columns="columns" :data-source="data">
    <template #bodyCell="{ column, text, record, index }">
      <template v-if="column.dataIndex === 'name'">
        <MqTag>{{ text }}</MqTag>
      </template>
      <template v-else-if="column.dataIndex === 'action'">
        <MqLink type="primary" :underline="false" theme="link" @click="clickHandle(index)">删除</MqLink>
      </template>
      <template v-else>
        {{ text }}
      </template>
    </template>
  </MqTable>
</template>

<script lang="ts">
import MqTable from '../../../lib/MqTable.vue';
import {reactive, ref} from 'vue';
export default {
  name: 'Table1.demo.vue',
  components: {
    MqTable
  },
  setup() {
    let data = reactive([
      {key: '1', name: '胡彦斌', age: 32, address: '西湖区湖底公园1号',},
      {key: '2', name: '胡彦祖', age: 32, address: '西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号',},
      {key: '3', name: '胡彦祖', age: 42, address: '西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号',},
      {key: '4', name: '胡彦祖', age: 42, address: '西湖区湖底公园1西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号',},
    ])
    const columns = reactive([
      {title: '姓名', dataIndex: 'name', key: 'name'},
      {title: '年龄', dataIndex: 'age', key: 'age', width: 80},
      {title: '住址', dataIndex: 'address', key: 'address', ellipsis: 'true'},
      {title: '操作', dataIndex: 'action', key: 'action'}
    ])
    const clickHandle = (index: string) => {
      const idx: number = data.findIndex(item => item.key === index)
      if (idx >= 0) data.splice(idx, 1)
    }
    let count = ref(data.length)
    const addHandle = () => {
      const newData = {
        key: `${count.value}`,
        name: 'hahaha',
        age: 32,
        address: `London, Park Lane no. ${count.value}`
      }
      data.push(newData)
    }
    return{
      data, columns, clickHandle, addHandle
    }
  }
}
</script>

<style scoped>

</style>
