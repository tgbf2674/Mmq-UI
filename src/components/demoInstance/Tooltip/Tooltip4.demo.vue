<demo>
受控模式(支持v-model)
</demo>
<template>
  <Tooltip v-model:visible="visible" content="我是出现在上边的文字" direction="top">
    <Button @click="visible = !visible">上边</Button>
  </Tooltip>
</template>

<script lang="ts">
import Tooltip from "../../../lib/Tooltip.vue";
import Button from "../../../lib/Button.vue";
import {ref} from 'vue';
export default {
  name: 'Popover1Demo',
  components: {Button, Tooltip},
  setup() {
    const visible = ref(false)
    return {
      visible
    }
  }
};
</script>
