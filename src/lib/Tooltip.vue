<template>
  <div class="tooltip">
    <slot></slot>
    <span class="tooltipText" :class="direction">{{ content }}</span>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
export default defineComponent({
  name: "Tooltip",
  props: {
    content: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: 'right'
    }
  },
  setup(props, context) {
  }
});
</script>

<style lang="scss">
.tooltip {
  position: relative;
  display: inline-block;
  .tooltipText {
    visibility: hidden;
    min-width: 120px;
    white-space: nowrap;
    background-color: #555;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 8px 10px;
    margin-left: 5px;
    position: absolute;
    z-index: 9999;
    top: 50%;
    transform: translate(0, -50%);
    left: 110%;
    opacity: 0;
    transition: opacity 0.3s;
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      margin-left: -5px;
      border-width: 6px;
      border-style: solid;
      transform: translate(-50%, -50%) rotate(90deg);
      border-color: #555 transparent transparent transparent;
    }
    &.top {
      left: 0;
      top: -80%;
      margin-left: -60px;
      &::after {
        top: 100%;
        left: 50%;
        transform: rotate(360deg);
      }
    }
  }
  &:hover {
    .tooltipText {
      visibility: visible;
      opacity: 1;
    }
  }
}
</style>
