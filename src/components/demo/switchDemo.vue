<template>
  <div>
    <h1>Switch 组件示例 </h1>
    <Demo :component="Switch1Demo"></Demo>
    <Demo :component="Switch2Demo"></Demo>
    <Demo :component="Switch3Demo"></Demo>
    <Demo :component="Switch4Demo"></Demo>
    <MqTable :columns="columns" :data-source="data" bordered>
      <template #title><h2>事件</h2></template>
    </MqTable>
  </div>
</template>

<script lang="ts">
import Switch1Demo from '../demoInstance/Switch/Switch1.demo.vue'
import Switch2Demo from '../demoInstance/Switch/Switch2.demo.vue'
import Switch3Demo from '../demoInstance/Switch/Switch3.demo.vue'
import Switch4Demo from '../demoInstance/Switch/Switch4.demo.vue'
import Demo from '../Demo.vue';
import {reactive} from 'vue';
export default {
name: "switchDemo",
  components:{Demo
  },
  setup(){
    const data = reactive([
      {key: '1', attr: 'change', describe: 'switch 状态发生变化时的回调函数', params: 'val，新状态的值'},
    ])
    const columns = reactive([
      {title: '参数', dataIndex: 'attr', key: 'attr'},
      {title: '说明', dataIndex: 'describe', key: 'describe'},
      {title: '参数', dataIndex: 'params', key: 'params'}
    ])
    return {
      Switch1Demo,
      Switch2Demo,
      Switch3Demo,
      Switch4Demo,
      data,
      columns
    }
  }
}
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  >h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    >pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>
