<demo>
文本域
</demo>
<template>
  <div>
    用于输入多行文本信息可缩放的输入框。 添加 type="textarea" 属性来将 input 元素转换为原生的 textarea 元素。

    文本域高度可通过 rows 属性控制
    <Input type="textarea" :rows="4" placeholder="请输入姓名" size="large" v-model:input-value="inputValue"/>
  </div>
</template>

<script lang="ts">
import Input from "../../../lib/Input.vue";
import {ref} from 'vue';
export default {
  components: {Input},
  setup() {
    const inputValue = ref('');
    return {inputValue};
  }
};
</script>
