<template>
  <i class="mmq-icon-wrapper" :style="{ color, 'font-size': fontSize + 'px' }" aria-hidden="true">
    <slot></slot>
  </i>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'MqIcons',
  props: {
    name: {
      type: String,
      required: true,
      default: 'icon-upload'
    },
    color: {
      type: String,
      default: ''
    },
    fontSize: {
      type: [Number, String],
      default: 14
    }
  }
});
</script>

<style lang="scss" scoped>
.mmq-icon-wrapper {
  height: 1em;
  width: 1em;
  line-height: 1em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
</style>
