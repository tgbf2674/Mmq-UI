<demo>
支持 disabled
</demo>
<template>
  <MqSwitch v-model="bool" open-text="133333333" close-text="22222222222222" />
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
