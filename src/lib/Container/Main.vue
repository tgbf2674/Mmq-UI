<template>
  <main class="mmq-main">
    <slot></slot>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'MqMain',
})
</script>

<style lang="scss" scoped>
.mmq-main{
  --mmq-main-padding: 20px;
  display: block;
  flex: 1;
  flex-basis: auto;
  overflow: auto;
  box-sizing: border-box;
  padding: var(--mmq-main-padding);
}
</style>
