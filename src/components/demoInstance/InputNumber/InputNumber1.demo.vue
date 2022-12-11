<demo>
常规用法
</demo>

<template>
  <InputNumber v-model="num"/>
</template>

<script lang="ts">
import InputNumber from "../../../lib/InputNumber.vue";
import {ref} from 'vue';
export default {
  components: {InputNumber},
  setup() {
    const num = ref(1);
    return {num};
  }
};
</script>
