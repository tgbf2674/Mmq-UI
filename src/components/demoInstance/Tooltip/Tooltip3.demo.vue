<demo>
自定义内容
</demo>
<template>
  <Tooltip direction="right">
    <template #content> multiple lines<br />second line </template>
    <Button>右边</Button>
  </Tooltip>
  <Tooltip direction="top">
    <template #content> multiple lines<br />second line </template>
    <Button>上边</Button>
  </Tooltip>
  <Tooltip direction="bottom">
    <template #content> multiple lines<br />second line </template>
    <Button>下边</Button>
  </Tooltip>
  <Tooltip direction="left">
    <template #content> multiple lines<br />second line </template>
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
