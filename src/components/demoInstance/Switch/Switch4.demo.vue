<demo>
扩展value的类型
</demo>
<template>
  <h5>你可以设置 open-value 和 close-value 属性， 它们接受 Boolean、String 或 Number 类型的值。</h5>
  <MqSwitch open-color="#13ce66" close-color="#ff4949" :close-value="1" :open-value="100" v-model="value" />
  {{ value }}
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
    const value = ref(100)
    return {
      value
    }
  }
}
</script>
