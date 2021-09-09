<demo>
长度限制
</demo>
<template>
  <Input maxlength="10" v-model="inputValue"/>
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
