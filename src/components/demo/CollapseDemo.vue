<template>
  <h1>Collapse 示例</h1>
  <Demo :component="Collapse1Demo"></Demo>
  <Demo :component="Collapse2Demo"></Demo>
  <Demo :component="Collapse3Demo"></Demo>
  <h3 style="margin-top: 40px;">Collapse 事件</h3>
  <table width="100%">
    <tr>
      <th>事件名</th>
      <th>说明</th>
      <th>参数</th>
    </tr>
    <tr>
      <td>change</td>
      <td>当前激活面板改变时触发(如果是手风琴模式，参数 activeNames 类型为string，否则为array)</td>
      <td>新当前页</td>
    </tr>
  </table>
  <h3 style="margin-top: 40px;">Collapse 属性</h3>
  <table width="100%">
    <tr>
      <th>属性名</th>
      <th>说明</th>
      <th>类型</th>
      <th>可选值</th>
      <th>默认值</th>
    </tr>
    <tr>
      <td>v-model:activeName</td>
      <td>当前激活的面板(如果是手风琴模式，绑定值类型需要为string，否则为array)</td>
      <td>string (accordion mode) / array (non-accordion mode)</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>accordion</td>
      <td>是否手风琴模式</td>
      <td>boolean</td>
      <td>-</td>
      <td>false</td>
    </tr>
  </table>
  <h3 style="margin-top: 40px;">Collapse Item属性</h3>
  <table width="100%">
    <tr>
      <th>属性名</th>
      <th>说明</th>
      <th>类型</th>
      <th>可选值</th>
      <th>默认值</th>
    </tr>
    <tr>
      <td>name</td>
      <td>唯一标志符</td>
      <td>string/number</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>title</td>
      <td>面板标题</td>
      <td>string</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>是否禁用</td>
      <td>boolean</td>
      <td>-</td>
      <td>-</td>
    </tr>
  </table>

</template>

<script lang="ts">
import Demo from '../Demo.vue'
import Collapse1Demo from '../demoInstance/Collapse/Collapse1.demo.vue'
import Collapse2Demo from '../demoInstance/Collapse/Collapse2.demo.vue'
import Collapse3Demo from '../demoInstance/Collapse/Collapse3.demo.vue'
export default {
name: "CollapseDemo",
  components: {Demo},
  setup(){
  return {
    Collapse1Demo,Collapse2Demo, Collapse3Demo
  }
  }
}
</script>

<style scoped>

</style>
