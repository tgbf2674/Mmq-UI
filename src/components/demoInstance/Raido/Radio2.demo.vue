<demo>
垂直排列
</demo>
<template>
  <Radio v-model="selectedValue" :options="options" vertical/>
</template>

<script lang="ts">
import Radio from "../../../lib/Radio.vue";
import {ref} from 'vue';
export default {
  components: {Radio},
  setup() {
    const selectedValue = ref('Apple');
    const options = ref([
      {label: '苹果', value: 'Apple'},
      {label: '梨', value: 'Pear'},
      {label: '橘子', value: 'Orange'}
    ]);
    return {selectedValue, options};
  }
};
</script>
