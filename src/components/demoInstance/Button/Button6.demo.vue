<demo>示例6</demo>
<template>
  <div>
    <ButtonGroup size="big" level="danger">
      <Button> ← 坐</Button>
      <Button> → 右</Button>
    </ButtonGroup>
  </div>
</template>

<script lang="ts">
import Button from "../../../lib/Button.vue";
import ButtonGroup from "../../../lib/ButtonGroup.vue"
export default {
  components: {
    Button, ButtonGroup
  }
}
</script>

<style scoped>

</style>
