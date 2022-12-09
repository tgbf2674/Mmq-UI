<template>
  <div class="tooltip">
    <slot></slot>
    <div class="tooltipText" :class="direction" :style="computedEffect">
      <slot name="content">{{ content }}</slot>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from 'vue';
export default defineComponent({
  name: "MqTooltip",
  props: {
    content: {
      type: String as PropType<string>,
      required: true
    },
    direction: {
      type: String as PropType<string>,
      default: 'right'
    },
    effect: {
      type: String as PropType<TooltipEffectOptions>,
      default: 'dark'
    }
  },
  setup(props, context) {
    const computedEffect = computed(() => {
      if (props.effect === 'light') {
        return {
          background: '#fff',
          color: '#606266'
        }
      } else {
        return {
          background: '#555',
          color: '#fff'
        }
      }
    })
    return {
      computedEffect
    }
  }
});
</script>

<style lang="scss">
.tooltip {
  margin-left: 40px;
  position: relative;
  display: inline-block;
  .tooltipText {
    visibility: hidden;
    min-width: 120px;
    font-size: 14px;
    white-space: nowrap;
    text-align: center;
    border-radius: 6px;
    padding: 8px 10px;
    margin-left: 5px;
    position: absolute;
    z-index: 9999;
    opacity: 0;
    transition: opacity 0.3s;
    &::after {
      content: "";
      position: absolute;
      border-color: #555 transparent transparent transparent;
      border-style: solid;
      border-width: 6px;
    }
    &.right {
      top: 50%;
      transform: translate(0, -50%);
      left: 110%;
      &::after {
        top: 50%;
        left: 0;
        margin-left: -5px;
        transform: translate(-50%, -50%) rotate(90deg);
      }
    }
    &.top {
      right: 50%;
      transform: translate(50%);
      bottom: 130%;
      &::after {
        top: 100%;
        left: 50%;
        transform: translate(-50%) rotate(360deg);
      }
    }
    &.bottom {
      right: 50%;
      top: 130%;
      transform: translate(50%);
      &::after {
        top: 0;
        left: 50%;
        transform: translate(-50%, -100%) rotate(180deg);
      }
    }
    &.left {
      top: 50%;
      transform: translate(0, -50%);
      right: 120%;
      &::after {
        top: 50%;
        right: 0;
        margin-left: -5px;
        transform: translate(100%, -50%) rotate(270deg);
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
