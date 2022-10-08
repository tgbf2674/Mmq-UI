<template>
  <aside class="mmq-aside" :style="style">
    <slot></slot>
  </aside>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue';
import type {CSSProperties} from 'vue';

export default defineComponent({
  name: 'MqAside',
  props: {
    width: {
      type: String,
      default: null
    }
  },
  setup(props) {
    return {
      style: computed(() => {
        return props.width ? {'width': props.width} as CSSProperties : {};
      })
    };
  }
});
</script>

<style lang="scss" scoped>
.mmq-aside {
  overflow: auto;
  box-sizing: border-box;
  flex-shrink: 0;
  width: 300px;
}
</style>
