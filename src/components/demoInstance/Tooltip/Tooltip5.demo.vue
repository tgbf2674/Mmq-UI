<demo>
动画效果可关闭（默认开启）
</demo>
<template>
  <Tooltip :transition="false" v-model:visible="visible" content="我是出现在上边的文字" direction="top">
    <Button @click="visible = !visible">上边</Button>
  </Tooltip>
</template>

<script lang="ts">
import Tooltip from "../../../lib/Tooltip.vue";
import Button from "../../../lib/Button.vue";
import {ref} from 'vue';
export default {
  name: 'Popover4Demo',
  components: {Button, Tooltip},
  setup() {
    const visible = ref(false)
    return {
      visible
    }
  }
};
</script>
