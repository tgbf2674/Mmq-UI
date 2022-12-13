<demo>
支持图标
</demo>
<template>
  <Input prefixIcon="edit" placeholder="请输入用户名" v-model="inputValue"/>
  <Input suffixIcon="search" placeholder="请输入搜索条件" v-model="inputValue"/>
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
