<demo>
文字描述，可选择是否在按钮内，按扭外
</demo>
<template>
  <h5>使用open-text属性与close-text属性来设置开关的文字描述。 使用 inline-prompt 属性来控制文本是否显示在点内。

    使用open-text属性与close-text属性来设置开关的文字描述。</h5>
  <MqSwitch v-model="bool" open-text="open" close-text="close" />
  <MqSwitch inline-prompt v-model="bool" open-text="open" close-text="close" />
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
