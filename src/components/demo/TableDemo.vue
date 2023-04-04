<template>
  <h1>Table 组件示例 </h1>
  <Demo :component="Table1Demo"></Demo>
  <Demo :component="Table3Demo"></Demo>
  <Demo :component="Table2Demo"></Demo>
  <Demo :component="Table4Demo"></Demo>
  <Demo :component="Table5Demo"></Demo>
  <Demo :component="Table6Demo"></Demo>
  <Demo :component="Table9Demo"></Demo>
  <Demo :component="Table7Demo"></Demo>
  <Demo :component="Table8Demo"></Demo>
  <Demo :component="Table10Demo"></Demo>
  <Demo :component="Table11Demo"></Demo>
  <Demo :component="Table12Demo"></Demo>
  <Demo :component="Table13Demo"></Demo>
  <MqTable :columns="columns" :data-source="data" bordered>
    <template #title><h2>参数</h2></template>
  </MqTable>
  <MqTable style="margin-top: 20px" :columns="columns1" :data-source="data1" bordered>
    <template #title><h2>Column</h2></template>
  </MqTable>
</template>

<script lang="ts">
import Table1Demo from '../demoInstance/Table/Table1.demo.vue';
import Table10Demo from '../demoInstance/Table/Table10.demo.vue';
import Table11Demo from '../demoInstance/Table/Table11.demo.vue';
import Table12Demo from '../demoInstance/Table/Table12.demo.vue';
import Table13Demo from '../demoInstance/Table/Table13.demo.vue';
import Table2Demo from '../demoInstance/Table/Table2.demo.vue';
import Table3Demo from '../demoInstance/Table/Table3.demo.vue';
import Table4Demo from '../demoInstance/Table/Table4.demo.vue';
import Table5Demo from '../demoInstance/Table/Table5.demo.vue';
import Table6Demo from '../demoInstance/Table/Table6.demo.vue';
import Table7Demo from '../demoInstance/Table/Table7.demo.vue';
import Table8Demo from '../demoInstance/Table/Table8.demo.vue';
import Table9Demo from '../demoInstance/Table/Table9.demo.vue';
import Demo from '../Demo.vue';
import {onMounted, reactive} from 'vue';
import addADom from '../../utils/addADom'

export default {
  name: 'TableDemo',
  components: {
    Demo
  },
  setup() {
    onMounted(() => {
      addADom()
    });
    const data = reactive([
      {key: '1', attr: 'bordered', describe: '是否展示外边框和列边框', type: 'boolean', default: false},
      {key: '2', attr: 'columns', describe: '表格的列配置, 具体项见下表', type: 'array', default: '-'},
      {key: '3', attr: 'dataSource', describe: '数据数组', type: 'object[]', default: '-'},
      {
        key: '4',
        attr: 'footer',
        describe: '表格尾部',
        type: 'Function(currentPageData)|v-slot:footer="currentPageData"',
        default: '-'
      },
      {
        key: '5',
        attr: 'header',
        describe: '表格头部',
        type: 'Function(currentPageData)|v-slot:header="currentPageData"',
        default: '-'
      },
      {key: '6', attr: 'height', describe: 'Table 的高度， 默认为自动高度', type: 'string', default: '-'},
      {
        key: '7',
        attr: 'bodyCell',
        describe: '个性化单元格',
        type: 'v-slot:bodyCell="{text, record, index, column}"',
        default: '-'
      },
      {key: '8', attr: 'rowClassName', describe: '表格行的类名', type: 'Function(record, index):string"', default: '-'},
      {key: '9', attr: 'size', describe: '表格大小', type: 'normal | middle | small"', default: 'normal'},
      {key: '10', attr: 'showSummary', describe: '是否展示合计', type: 'boolean', default: 'false'},
      {key: '11', attr: 'sumText', describe: '合计行的展示标题', type: 'string', default: '合计'},
      {key: '12', attr: 'summaryMethod', describe: '自定义合计行计算方法', type: 'Function(): object', default: '-'},
    ]);
    const columns = reactive([
      {title: '参数', dataIndex: 'attr', key: 'attr'},
      {title: '说明', dataIndex: 'describe', key: 'describe'},
      {title: '类型', dataIndex: 'type', key: 'type'},
      {title: '默认值', dataIndex: 'default', key: 'default'}
    ]);
    const columns1 = reactive([
      {title: '参数', dataIndex: 'attr', key: 'attr'},
      {title: '说明', dataIndex: 'describe', key: 'describe'},
      {title: '类型', dataIndex: 'type', key: 'type'},
      {title: '默认值', dataIndex: 'default', key: 'default'}
    ]);
    const data1 = reactive([
      {key: '1', attr: 'width', describe: '列宽度', type: 'number', default: '-'},
      {key: '2', attr: 'ellipsis', describe: '超过宽度将自动省略', type: 'boolean', default: 'false'},
      {
        key: '3',
        attr: 'fixed',
        describe: '列是否固定，可选 true(等效于 left) \'left\' \'right\'',
        type: 'boolean|string',
        default: 'false'
      },
      {
        key: '4',
        attr: 'sort',
        describe: '排序函数，本地排序使用一个函数(参考 Array.sort 的 compareFunction)',
        type: 'Function',
        default: '-'
      }
    ]);
    return {
      Table1Demo,
      Table2Demo,
      Table3Demo,
      Table4Demo,
      Table5Demo,
      Table6Demo,
      Table7Demo,
      Table8Demo,
      Table9Demo,
      Table10Demo,
      Table11Demo,
      Table12Demo,
      Table13Demo,
      data,
      columns,
      columns1,
      data1
    };
  }
};
</script>

<style scoped>

</style>
