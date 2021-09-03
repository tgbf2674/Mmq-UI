<demo>
常规用法
</demo>
<template>
  <Tooltip content="我是出现在右边的文字" direction="right">
    <Button>右边</Button>
  </Tooltip>
  <Tooltip content="我是出现在上边的文字" direction="top">
    <Button>上边</Button>
  </Tooltip>
  <Tooltip content="我是出现在下边的文字" direction="bottom">
    <Button>下边</Button>
  </Tooltip>
  <Tooltip content="我是出现在左边的文字" direction="left">
    <Button>左边</Button>
  </Tooltip>
</template>

<script lang="ts">
import Tooltip from "../../../lib/Tooltip.vue";
import Button from "../../../lib/Button.vue";
export default {
  name: 'Popover1Demo',
  components: {Button, Tooltip},
  setup() {
  }
};
</script>
