<demo>
支持图标
</demo>
<template>
  <div style="display: flex; align-items: center">
  <Input style="width: 200px; margin-right: 20px;" prefixIcon="edit" placeholder="请输入用户名" v-model="inputValue"/>
  <Input style="width: 200px" suffixIcon="search" placeholder="请输入搜索条件" v-model="inputValue"/>
  </div>
</template>

<script lang="ts">
import Input from "../../../lib/Input.vue";
import {ref} from 'vue';
export default {
  components: {Input},
  setup() {
    const inputValue = ref('');
    return {inputValue};
  }
};
</script>
