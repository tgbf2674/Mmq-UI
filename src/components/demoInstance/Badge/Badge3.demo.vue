<demo>
自定义内容
</demo>
<template>
  <Badge value="new" :max="99" class="item">
    <Button size="big">评论</Button>
  </Badge>
  <Badge value="hot" type="danger" :max="10" class="item">
    <Button size="big">回复</Button>
  </Badge>
</template>

<script lang="ts">
import Badge from '../../../lib/Badge.vue'
import Button from '../../../lib/Button.vue'
export default {
  name: 'Badge1.demo',
  components: {Badge,Button}
}
</script>

<style lang="scss" scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
