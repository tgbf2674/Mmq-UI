<template>
  <div class="mmq-icon-wrapper">
    <div class="mmq-icon" :style="{ color, 'font-size': fontSize + 'px' }" aria-hidden="true">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
export default defineComponent({
  name: "MqIcon",
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
      default: 20
    }
  }
});
</script>

<style lang="scss" scoped>
</style>
