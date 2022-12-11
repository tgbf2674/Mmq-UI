<demo>
常规用法
</demo>

<template>
  <InputNumber/>
</template>

<script lang="ts">
import InputNumber from "../../../lib/InputNumber.vue";
import {ref} from 'vue';
export default {
  components: {InputNumber},
  setup() {
    const inputValue = ref('李四');
    return {inputValue};
  }
};
</script>
