<demo>
表尾合计行
</demo>

<template>
  <h4>将 show-summary 设置为true就会在表格尾部展示合计行。 默认情况下，对于合计行，第一列不进行数据求合操作，而是显示「合计」二字（可通过sum-text配置），其余列会将本列所有数值进行求合操作，并显示出来。</h4>
  <MqTable show-summary :columns="columns" :data-source="data">
  </MqTable>
</template>

<script lang="ts">
import MqTable from '../../../lib/MqTable.vue';
import {computed, reactive} from 'vue';
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
      {title: '姓名', dataIndex: 'name', key: 'name', fixed: 'left', width: 100},
      {title: '年龄', dataIndex: 'age', key: 'age', width: 1500},
      {title: '住址', dataIndex: 'address', key: 'address', ellipsis: 'true', width: 300}
    ])
    const totals = computed(() => {
      let totalAge = 0;

      data.forEach(({ age }) => {
        totalAge += age;
      });
      return { totalAge };
    })
    return{
      data, columns, totals
    }
  }
}
</script>

<style scoped>

</style>
