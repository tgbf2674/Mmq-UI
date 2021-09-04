<demo>
小红点
</demo>
<template>
  <Badge is-dot class="item">
    数据查询
  </Badge>
  <Badge is-dot :max="10" class="item">
    <Button size="big">回复</Button>
  </Badge>
</template>

<script lang="ts">
import Badge from '../../../lib/Badge.vue';
import Button from '../../../lib/Button.vue';

export default {
  name: 'Badge1.demo',
  components: {Badge, Button}
};
</script>

<style lang="scss" scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
