<template>
  <h1>Card示例</h1>
  <Demo :component="Card1Demo"/>
  <Demo :component="Card2Demo"/>

  <h3 style="margin-top: 40px;">属性</h3>
  <table width="100%">
    <tr>
      <th>属性名</th>
      <th>说明</th>
      <th>类型</th>
      <th>可选值</th>
      <th>默认值</th>
    </tr>
    <tr>
      <td>title</td>
      <td>卡片的标题 你既可以通过设置 title 来修改标题，也可以通过 slot#title 传入 DOM 节点</td>
      <td>string</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>shadow</td>
      <td>设置阴影显示时机</td>
      <td>string</td>
      <td>always / hover / never</td>
      <td>always</td>
    </tr>
  </table>
  <h3 style="margin-top: 40px;">插槽</h3>
  <table width="100%">
    <tr>
      <td>插槽名</td>
      <td>说明</td>
    </tr>
    <tr>
      <td>header</td>
      <td>卡片标题内容</td>
    </tr>
  </table>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Demo from "../Demo.vue";
import Card1Demo from '../demoInstance/Card/Card1.demo.vue'
import Card2Demo from '../demoInstance/Card/Card2.demo.vue'
export default defineComponent({
  name: "CardDemo",
  components: {Demo},
  setup() {
    return {Card1Demo, Card2Demo};
  }
});
</script>

<style lang="scss">
</style>
