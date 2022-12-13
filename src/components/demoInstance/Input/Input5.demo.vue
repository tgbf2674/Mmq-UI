<demo>
长度限制
</demo>
<template>
  <div style="display: flex;align-items: center">
    <MqInput :maxlength="10" size="large" v-model="inputValue"/>
    <MqInput :maxlength="10" style="margin: 0 20px;" clearable v-model="inputValue"/>
    <MqInput :maxlength="10" size="small" v-model="inputValue"/>
  </div>
</template>

<script lang="ts">
import MqInput from "../../../lib/Input.vue";
import {ref} from 'vue';
export default {
  components: {MqInput},
  setup() {
    const inputValue = ref('');
    return {inputValue};
  }
};
</script>
