<demo>示例7: 原型和圆角按钮</demo>
<template>
  <div>
    <Button circle>1</Button>
    <Button size="big" round>大大大</Button>
    <Button round>中中中</Button>
    <Button size="small" round>小小小</Button>
  </div>
</template>

<script lang="ts">
import Button from "../../../lib/Button.vue";
export default {
  components: {
    Button
  }
}
</script>

<style scoped>

</style>
