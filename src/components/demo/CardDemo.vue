<template>
  <h1>Card示例</h1>
  <Demo :component="Card1Demo"/>
  <Demo :component="Card2Demo"/>
  <MqTable :columns="columns1" :data-source="data1" bordered>
    <template #title><h2>属性</h2></template>
  </MqTable>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive} from 'vue';
import Demo from "../Demo.vue";
import Card1Demo from '../demoInstance/Card/Card1.demo.vue'
import Card2Demo from '../demoInstance/Card/Card2.demo.vue'
import addADom from '../../utils/addADom';
export default defineComponent({
  name: "CardDemo",
  components: {Demo},
  setup() {
    onMounted(() => {
      addADom()
    });
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
    return {Card1Demo, Card2Demo, columns1, data1};
  }
});
</script>

<style lang="scss">
</style>
