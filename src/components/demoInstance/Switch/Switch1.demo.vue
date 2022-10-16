<demo>
常规用法
</demo>
<template>
  <h5>绑定 v-model 到一个 Boolean 类型的变量。</h5>
  <MqSwitch v-model="bool" />
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
