<template>
  <h1>Collapse 示例</h1>
  <Demo :component="Collapse1Demo"></Demo>
  <Demo :component="Collapse2Demo"></Demo>
  <Demo :component="Collapse3Demo"></Demo>
  <H2>Collapse 事件</H2>
  <MqTable :columns="columns" :data-source="data" bordered></MqTable>
  <H2>Collapse 属性</H2>
  <MqTable :columns="columns1" :data-source="data1" bordered></MqTable>
  <H2>Collapse Item属性</H2>
  <MqTable :columns="columns1" :data-source="data1" bordered></MqTable>
</template>

<script lang="ts">
import Demo from '../Demo.vue'
import Collapse1Demo from '../demoInstance/Collapse/Collapse1.demo.vue'
import Collapse2Demo from '../demoInstance/Collapse/Collapse2.demo.vue'
import Collapse3Demo from '../demoInstance/Collapse/Collapse3.demo.vue'
import {reactive} from 'vue';
export default {
name: "CollapseDemo",
  components: {Demo},
  setup(){
    const data = reactive([
      {key: '1', attr: 'change', describe: '当前激活面板改变时触发(如果是手风琴模式，参数 activeNames 类型为string，否则为array)', params: '新当前页'},
    ])
    const columns = reactive([
      {title: '参数', dataIndex: 'attr', key: 'attr'},
      {title: '说明', dataIndex: 'describe', key: 'describe'},
      {title: '参数', dataIndex: 'params', key: 'params'}
    ])
    const data1 = reactive([
      {key: '1', attr: 'v-model:activeName', describe: '当前激活的面板(如果是手风琴模式，绑定值类型需要为string，否则为array)', type: 'string (accordion mode) / array (non-accordion mode)', default: '-'},
      {key: '2', attr: 'accordion', describe: '是否手风琴模式', type: 'boolean', default: 'false'}
    ])
    const columns1 = reactive([
      {title: '参数', dataIndex: 'attr', key: 'attr'},
      {title: '说明', dataIndex: 'describe', key: 'describe'},
      {title: '类型', dataIndex: 'type', key: 'type'},
      {title: '默认值', dataIndex: 'default', key: 'default'}
    ])
    const data2 = reactive([
      {key: '1', attr: 'name', describe: '唯一标志符', type: 'string/number', default: '-'},
      {key: '2', attr: 'title', describe: '面板标题', type: 'string', default: '-'},
      {key: '2', attr: 'disabled', describe: '是否禁用', type: 'boolean', default: '-'}
    ])
    const columns2 = reactive([
      {title: '参数', dataIndex: 'attr', key: 'attr'},
      {title: '说明', dataIndex: 'describe', key: 'describe'},
      {title: '类型', dataIndex: 'type', key: 'type'},
      {title: '默认值', dataIndex: 'default', key: 'default'}
    ])
  return {
    Collapse1Demo,Collapse2Demo, Collapse3Demo, data, columns, columns1, data1, columns2, data2
  }
  }
}
</script>

<style scoped>

</style>
