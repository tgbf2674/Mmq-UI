<demo>
支持清空
</demo>
<template>
  <Input clearable v-model="inputValue"/>
</template>

<script lang="ts">
import Input from "../../../lib/Input.vue";
import {ref} from 'vue';
export default {
  components: {Input},
  setup() {
    const inputValue = ref('');
    return { inputValue};
  }
};
</script>
