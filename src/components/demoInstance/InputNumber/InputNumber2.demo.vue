<demo>
禁用状态
</demo>

<template>
  <h5>disabled属性接受一个 Boolean，设置为true即可禁用整个组件。</h5>
  <InputNumber disabled v-model="num"/>
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
