<template>
  <div @mouseenter="handleEnter" @mouseleave="handleLeave" class="tooltip">
    <slot></slot>
    <div ref="tooltipRef" :class="['tooltipText', direction, isControl&& computedVisible]"
         :style="computedEffect">
      <slot name="content">{{ content }}</slot>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted, PropType, ref} from 'vue';

export default defineComponent({
  name: 'MqTooltip',
  props: {
    content: {
      type: String as PropType<string>
    },
    direction: {
      type: String as PropType<string>,
      default: 'right'
    },
    effect: {
      type: String as PropType<TooltipEffectOptions>,
      default: 'dark'
    },
    visible: {
      type: Boolean,
      default: undefined
    },
    transition: {
      type: Boolean,
      default: true
    }
  },
  setup(props, context) {
    const computedEffect = computed(() => {
      if (props.effect === 'light') {
        return {
          background: '#fff',
          color: '#606266'
        };
      } else {
        return {
          background: '#555',
          color: '#fff'
        };
      }
    });
    const isControl = ref(false)
    onMounted(() => {
      isControl.value = props.visible !== undefined
      if (props.transition) {
        tooltipRef.value.style.transition = 'opacity .3s'
      }
    })
    const computedVisible = computed(() => {
      return props.visible ? 'visible' : 'hidden'
    })
    const tooltipRef = ref()
    const handleEnter = () => {
      if (!isControl.value) {
        tooltipRef.value.style.visibility = 'visible'
        tooltipRef.value.style.opacity = '1'
      }
    };
    const handleLeave = () => {
      if(!isControl.value) {
        tooltipRef.value.style.visibility = 'hidden'
        tooltipRef.value.style.opacity = '0'
      }
    };
    return {
      computedEffect, handleEnter, handleLeave, tooltipRef, isControl, computedVisible
    };
  }
});
</script>

<style lang="scss">
.tooltip {
  margin-left: 40px;
  position: relative;
  display: inline-block;
  transition: opacity .3s;
  .tooltipText {
    min-width: 120px;
    font-size: 14px;
    white-space: nowrap;
    text-align: center;
    border-radius: 6px;
    padding: 8px 10px;
    margin-left: 5px;
    position: absolute;
    z-index: 9999;
    visibility: hidden;
    opacity: 0;

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
  .visible {
    visibility: visible;
    opacity: 1;
  }

  .hidden {
    visibility: hidden;
    opacity: 0;
  }
}
</style>
