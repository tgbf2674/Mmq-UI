<template>
  <h1>Table 组件示例 </h1>
  <Demo :component="Table1Demo"></Demo>
  <Demo :component="Table3Demo"></Demo>
  <Demo :component="Table2Demo"></Demo>
  <Demo :component="Table4Demo"></Demo>
  <Demo :component="Table5Demo"></Demo>
  <H2>参数</H2>
  <MqTable :columns="columns" :data-source="data" bordered></MqTable>
  <H2>Column</H2>
  <MqTable :columns="columns1" :data-source="data" bordered></MqTable>
</template>

<script lang="ts">
import Table1Demo from '../demoInstance/Table/Table1.demo.vue'
import Table2Demo from '../demoInstance/Table/Table2.demo.vue'
import Table3Demo from '../demoInstance/Table/Table3.demo.vue'
import Table4Demo from '../demoInstance/Table/Table4.demo.vue'
import Table5Demo from '../demoInstance/Table/Table5.demo.vue'
import Demo from '../Demo.vue';
import {reactive} from 'vue';
export default {
  name: 'TableDemo',
  components: {
    Demo
  },
  setup () {
    const data = reactive([
      {key: '1', attr: 'bordered', describe: '是否展示外边框和列边框', type: 'boolean', default: false},
      {key: '2', attr: 'columns', describe: '表格的列配置, 具体项见下表', type: 'array', default: '-'},
      {key: '3', attr: 'dataSource', describe: '数据数组', type: 'object[]', default: '-'},
      {key: '4', attr: 'footer', describe: '表格尾部', type: 'Function(currentPageData)|v-slot:footer="currentPageData"', default: '-'},
      {key: '5', attr: 'header', describe: '表格头部', type: 'Function(currentPageData)|v-slot:header="currentPageData"', default: '-'},
      {key: '6', attr: 'height', describe: 'Table 的高度， 默认为自动高度。', type: 'string', default: '-'},
    ])
    const columns = reactive([
      {title: '参数', dataIndex: 'attr', key: 'attr'},
      {title: '说明', dataIndex: 'describe', key: 'describe'},
      {title: '类型', dataIndex: 'type', key: 'type'},
      {title: '默认值', dataIndex: 'default', key: 'default'}
    ])
    const columns1 = reactive([
      {title: '参数', dataIndex: 'attr', key: 'attr'},
      {title: '说明', dataIndex: 'describe', key: 'describe'},
      {title: '类型', dataIndex: 'type', key: 'type'},
      {title: '默认值', dataIndex: 'default', key: 'default'}
    ])
    const data1 = reactive([
      {key: '1', attr: 'width', describe: '列宽度', type: 'number', default: '-'},
      {key: '2', attr: 'ellipsis', describe: '超过宽度将自动省略', type: 'boolean', default: 'false'},
      {key: '3', attr: 'fixed', describe: '列是否固定，可选 true(等效于 left) \'left\' \'right\'', type: 'boolean|string', default: 'false'}
    ])
    return {
      Table1Demo, Table2Demo, Table3Demo, Table4Demo, Table5Demo, data, columns, columns1, data1
    }
  }
}
</script>

<style scoped>

</style>
