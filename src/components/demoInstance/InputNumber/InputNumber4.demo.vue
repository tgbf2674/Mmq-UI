<demo>
步进
</demo>

<template>
  <h5>允许定义递增递减的步进控制，设置 step 属性可以控制步长。</h5>
  <InputNumber :step="0.1" :min="0" :max="10" v-model="num"/>
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
