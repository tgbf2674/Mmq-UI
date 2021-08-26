<demo>
支持禁用
</demo>
<template>
  <Input disabled v-model:inputValue="inputValue"/>
</template>

<script lang="ts">
import Input from "../lib/Input.vue";
import {ref} from 'vue';
export default {
  components: {Input},
  setup() {
    const inputValue = ref('');
    return {inputValue};
  }
};
</script>
