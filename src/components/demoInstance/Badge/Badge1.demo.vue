<demo>
常规使用
</demo>
<template>
  <Badge :value="12" class="item">
    <Button size="big">评论</Button>
  </Badge>
  <Badge :value="12" class="item">
    <Button size="big">回复</Button>
  </Badge>
  <Badge :value="1" class="item" type="primary">
    <Button size="big">评论</Button>
  </Badge>
  <Badge :value="2" class="item" type="danger">
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
