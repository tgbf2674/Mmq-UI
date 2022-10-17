<demo>
常规用法
</demo>
<template>
  <h5>绑定 v-model 到一个 Boolean 类型的变量。可以通过closeColor 和openColor来控制开关背景色</h5>
  <MqSwitch v-model="bool" />
  <MqSwitch open-color="#13ce66" close-color="#ff4949" v-model="bool" />
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
