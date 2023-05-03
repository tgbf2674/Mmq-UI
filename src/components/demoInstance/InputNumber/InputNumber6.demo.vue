<demo>
金额显示
</demo>

<template>
  <h5>数字作为金额显示，千分位逗号隔开，数字可选择保留几位小数</h5>
  <InputNumber v-model="num"/>
  {{ amount }}
</template>

<script lang="ts">
import InputNumber from "../../../lib/InputNumber.vue";
import {ref} from 'vue';
import { toNumMoneyToChinese} from 'mmq-utils';
export default {
  components: {InputNumber},
  setup() {
    let num = ref(10000);
    let amount = toNumMoneyToChinese(1999999)
    return {amount, num};
  }
};
</script>
