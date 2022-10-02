<demo>
禁用状态
</demo>
<template>
  <checkbox v-model="value" label="菠萝" disabled></checkbox>
  <checkbox v-model="value" label="西瓜" disabled></checkbox>
</template>

<script lang="ts">
import checkbox from '../../../lib/Checkbox.vue';
import {ref} from 'vue';
export default {
  name: 'Checkbox1.demo',
  components: {checkbox},
  setup() {
    const value = ref(false)
    return {
      value
    }
  }
}
</script>

<style scoped>

</style>
