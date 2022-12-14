<demo>
输入框尺寸
</demo>
<template>
  <div style="display: flex;align-items: center;">
    <Input type="textarea" placeholder="请输入姓名" size="large" v-model:input-value="inputValue"/>
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
