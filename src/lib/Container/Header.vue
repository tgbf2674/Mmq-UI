<template>
  <header class="mmq-header" :style="style">
    <slot></slot>
  </header>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import type { CSSProperties } from 'vue'
export default defineComponent({
  name: 'MqHeader',
  props: {
    height: {
      type: [Number, String],
      default: 60,
    },
  },
  setup(props) {
    return {
      style: computed(() => (
        {
          'height': `${props.height}px`,
        }
      ) as CSSProperties),
  }
  },
})
</script>

<style lang="scss" scoped>
.mmq-header{
  --mmq-header-padding: 0 20px;
  padding: var(--mmq-header-padding);
  box-sizing: border-box;
  flex-shrink: 0;
  height: 60px;
}
</style>
