<demo>
精度
</demo>

<template>
  <h5>设置 precision 属性可以控制数值精度，接收一个 Number。<span class="tipWarning">(TIP:precision 的值必须是一个非负整数，并且不能小于 step 的小数位数。)</span></h5>
  <InputNumber :precision="2" :step="0.1" :min="0" :max="10" v-model="num"/>
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
