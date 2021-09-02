<template>
  <main class="gulu-main">
    <slot></slot>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'GuluMain',
})
</script>

<style lang="scss" scoped>
.gulu-main{
  --gulu-main-padding: 20px;
  display: block;
  flex: 1;
  flex-basis: auto;
  overflow: auto;
  box-sizing: border-box;
  padding: var(--gulu-main-padding);
}
</style>
