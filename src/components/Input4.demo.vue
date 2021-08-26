<demo>
密码框
</demo>
<template>
  <Input type="password" v-model:inputValue="inputValue"/>
</template>

<script lang="ts">
import Input from "../lib/Input.vue";
import {ref} from 'vue';
export default {
  components: {Input},
  setup() {
    const inputValue = ref('');
    return {inputValue};
  }
};
</script>
