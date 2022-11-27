<template>
  <footer class="mmq-footer" :style="style">
    <slot></slot>
  </footer>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import type { CSSProperties } from 'vue'
export default defineComponent({
  name: 'MqFooter',
  props: {
    height: {
      type: [Number, String],
      default: 60
    }
  },
  setup(props) {
    return {
      style: computed(() => (
        {
          'height': props.height+ 'px',
        }
      ) as CSSProperties),
    }
  },
})
</script>

<style lang="scss" scoped>
.mmq-footer{
  --mmq-footer-padding: 0 20px;
  padding: var(--mmq-footer-padding);
  box-sizing: border-box;
  flex-shrink: 0;
  height: 60px;
}
</style>
