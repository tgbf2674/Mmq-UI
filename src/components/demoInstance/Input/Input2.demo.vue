<demo>
支持清空
</demo>
<template>
  <div style="display: flex;align-items: center">
  <MqInput size="large" clearable v-model="inputValue"/>
  <MqInput style="margin: 0 20px;" clearable v-model="inputValue"/>
  <MqInput size="small" clearable v-model="inputValue"/>
  </div>
</template>

<script lang="ts">
import MqInput from "../../../lib/Input.vue";
import {ref} from 'vue';
export default {
  components: {MqInput},
  setup() {
    const inputValue = ref('');
    return { inputValue};
  }
};
</script>
