<demo>
常规用法
</demo>

<template>
  <div>
    <Input placeholder="请输入姓名" v-model:input-value="inputValue"/>
  </div>
</template>

<script lang="ts">
import Input from '../../../lib/Input.vue';
import {ref} from 'vue';

export default {
  components: {Input},
  setup() {
    const inputValue = ref('李四');
    return {inputValue};
  }
};
</script>
