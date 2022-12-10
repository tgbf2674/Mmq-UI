<demo>
受控模式
</demo>
<template>
  <Tooltip :visible="visible" content="我是出现在上边的文字" direction="top">
    <Button @mouseenter="visible = true" @mouseleave="visible = false">上边</Button>
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
