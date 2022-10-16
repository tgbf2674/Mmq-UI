<demo>
支持禁用
</demo>
<template>
  <h5>设置disabled属性，接受一个Boolean，设置true即可禁用。</h5>
  <MqSwitch v-model="bool" disabled />
</template>
<script lang="ts">
import MqSwitch from '../../../lib/MqSwitch.vue';
import {
  ref
} from 'vue'
export default {
  components: {
    MqSwitch,
  },
  setup() {
    const bool = ref(false)
    return {
      bool
    }
  }
}
</script>
