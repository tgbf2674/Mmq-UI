<demo>
表尾合计行
</demo>

<template>
  <h4>将 show-summary 设置为true就会在表格尾部展示合计行。
    默认情况下，对于合计行，第一列不进行数据求合操作，而是显示「合计」二字（可通过sum-text配置），其余列会将本列所有数值进行求合操作，并显示出来。</h4>
  <MqTable show-summary :columns="columns" :data-source="data">
  </MqTable>

  <MqTable :summary-method="getSummaries" style="margin-top: 20px;" show-summary :columns="columns1" :data-source="data1">
  </MqTable>
</template>

<script lang="ts">
import MqTable from '../../../lib/MqTable.vue';
import {computed, reactive, ref} from 'vue';
import {isUndefined} from 'mmq-utils';

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
    ]);
    const columns = reactive([
      {title: '姓名', dataIndex: 'name', key: 'name', fixed: 'left', width: 100},
      {title: '年龄', dataIndex: 'age', key: 'age', width: 1500},
      {title: '住址', dataIndex: 'address', key: 'address', ellipsis: 'true', width: 300}
    ]);
    const columns1 = ref([
      {
        title: 'Name',
        dataIndex: 'name',
      },
      {
        title: 'Borrow',
        dataIndex: 'borrow',
      },
      {
        title: 'Repayment',
        dataIndex: 'repayment',
      },
    ]);

    const data1 = ref([
      {
        key: '1',
        name: 'John Brown',
        borrow: 10,
        repayment: 33,
      },
      {
        key: '2',
        name: 'Jim Green',
        borrow: 100,
        repayment: 0,
      },
      {
        key: '3',
        name: 'Joe Black',
        borrow: 10,
        repayment: 10,
      },
      {
        key: '4',
        name: 'Jim Red',
        borrow: 75,
        repayment: 45,
      },
    ]);
    const totals = computed(() => {
      let totalAge = 0;

      data.forEach(({age}) => {
        totalAge += age;
      });
      return {totalAge};
    });
    const getSummaries = () => {
      const res:any = {};
      res.sumText = '总共共'
      data1.value.forEach((item: any) => {
        for (const key in item) {
          if (typeof item[key] === 'number') {
            isUndefined(res[key]) ? res[key] = 0 + item[key] : res[key] += item[key];
          } else {
            res[key] = 'N/A';
          }
        }
      });
      return res
    };
    return {
      data, columns, data1, columns1, totals, getSummaries
    };
  }
};
</script>

<style scoped>

</style>
