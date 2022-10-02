<demo>
常规用法
</demo>
<template>
  <checkbox v-model="value" label="西瓜"></checkbox>{{value}}
  <checkbox v-model="value1" label="葡萄"></checkbox>{{value1}}
  <checkbox v-model="value2" label="车厘子"></checkbox>
  <checkbox v-model="value3" label="菠萝" disabled></checkbox>
</template>

<script lang="ts">
import checkbox from '../../../lib/Checkbox.vue';
import {ref} from 'vue';
export default {
  name: 'Checkbox1.demo',
  components: {checkbox},
  setup() {
    const value = ref(false)
    const value1 = ref(true)
    const value2 = ref(false)
    const value3 = ref(false)
    return {
      value, value1, value2, value3
    }
  }
}
</script>

<style scoped>

</style>
