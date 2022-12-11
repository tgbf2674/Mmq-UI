<demo>
常规用法
</demo>

<template>
  <h5>要使用它，只需要在元素中使用 v-model 绑定变量即可，变量的初始值即为默认值</h5>
  <InputNumber :min="0" :max="10" v-model="num"/>
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
