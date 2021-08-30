<demo>
纵向展示
</demo>
<template>
  <Button @click="visible=!visible">纵向打开/收起</Button>
  <Spread :visible="visible">
    <div class="spread-content"></div>
  </Spread>
</template>

<script lang="ts">
import Spread from "../../lib/Spread.vue";
import Button from "../../lib/Button.vue";
import {ref} from "vue";
export default {
  components: {Button, Spread},
  setup() {
    const visible = ref(true);
    return {visible};
  }
};
</script>

<style lang="scss">
.spread-content {
  height: 200px;
  width: 200px;
  background: #2b85e4;
  margin-top: 20px;
}
</style>
