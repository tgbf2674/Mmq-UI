<template>
  <footer class="gulu-footer" :style="style">
    <slot></slot>
  </footer>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import type { CSSProperties } from 'vue'
export default defineComponent({
  name: 'Footer',
  props: {
    height: {
      type :String,
      default: null
    }
  },
  setup(props) {
    return {
      style: computed(() => (
        props.height ? {
          'height': props.height,
        } : {}
      ) as CSSProperties),
    }
  },
})
</script>

<style lang="scss" scoped>
.gulu-footer{
  --gulu-footer-padding: 20px;
  padding: var(--gulu-footer-padding);
  box-sizing: border-box;
  flex-shrink: 0;
}
</style>
