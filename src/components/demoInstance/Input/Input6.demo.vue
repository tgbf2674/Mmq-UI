<demo>
支持图标
</demo>
<template>
  <Input prefixIcon="icon-user" placeholder="请输入用户名" v-model:inputValue="inputValue"/>
  <Input suffixIcon="icon-search" placeholder="请输入搜索条件" v-model:inputValue="inputValue"/>
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
