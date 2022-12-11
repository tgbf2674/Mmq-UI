<demo>
最大值最小值限制
</demo>

<template>
  <h5>max,min属性接受一个 Number，设定值的范围。</h5>
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
