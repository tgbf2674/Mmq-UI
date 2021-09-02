<template>
  <header class="gulu-header" :style="style">
    <slot></slot>
  </header>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import type { CSSProperties } from 'vue'
export default defineComponent({
  name: 'GuluHeader',
  props: {
    height: {
      type: String,
      default: null,
    },
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
.gulu-header{
  --gulu-header-padding: 20px;
  padding: var(--gulu-header-padding);
  box-sizing: border-box;
  flex-shrink: 0;
  height: var(--el-header-height);
}
</style>
