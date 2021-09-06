<demo>
底部内容
</demo>
<template>
  <Empty imageSize="200">
    <Button level="main">按钮</Button>
  </Empty>
</template>

<script lang="ts">
import Empty from '../../../lib/Empty.vue';
import Button from '../../../lib/Button.vue'
export default {
name: "Empty1.demo",
  components:{
  Empty,Button
  }
}
</script>

<style scoped>

</style>
