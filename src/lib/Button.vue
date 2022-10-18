<template>
  <button class="mmq-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="mmq-loadingIndicator"></span>
    <slot />
  </button>
</template>

<script lang="ts">
import {computed, defineComponent, inject, PropType} from 'vue';

export default defineComponent({
  name: 'MqButton',
  props: {
    theme: {
      type: String as PropType<ButtonTheme>,
      default: 'button'
    },
    size: {
      type: String as PropType<ButtonSize>,
      default: ''
    },
    level: {
      type: String as PropType<ButtonLevel>,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const {theme, size, level, circle, round} = props;
    const buttonGroupContext: ButtonSizeLevelType = inject('buttonGroupContext', {size: 'normal', level: 'normal'})
    const _size = computed(() => size || buttonGroupContext.size)
    const _level = computed(() => level || buttonGroupContext.level)
    const isCircle = computed(() => circle ? 'isCircle' : '')
    const isRound = computed(() => round ? 'isRound' : '')
    const classes = computed(() => {
      return {
        [`mmq-theme-${theme}`]: theme,
        [`mmq-size-${_size.value}`]: _size.value,
        [`mmq-level-${_level.value}`]: _level.value,
        [`${isCircle.value}`]: isCircle.value,
        [`${isRound.value}`]: isRound.value,
        };
    });
    return {
      classes
    };
  }
});
</script>

<style lang="scss" scoped>
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$red: red;
$grey: grey;
.mmq-button {
  box-sizing: border-box;
  height: $h;
  min-width: 32px;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;
  & + & {
    margin-left: 8px;
  }

  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &.mmq-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;

    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }

  &.mmq-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;

    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }

  &.mmq-size-big {
    font-size: 28px;
    height: 48px;
    padding: 0 16px;
  }

  &.mmq-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }

  &.mmq-theme-button {
    &.mmq-level-main {
      background: $blue;
      color: white;
      border-color: $blue;

      &:hover,
      &:focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }

    &.mmq-level-danger {
      background: $red;
      border-color: $red;
      color: white;

      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
  }

  &.mmq-theme-link {
    &.mmq-level-danger {
      color: $red;

      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }

  &.mmq-theme-text {
    &.mmq-level-main {
      color: $blue;

      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }

    &.mmq-level-danger {
      color: $red;

      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }

  &.mmq-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;

      &:hover {
        border-color: $grey;
      }
    }
  }

  &.mmq-theme-link, &.mmq-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }

  &.isCircle {
    border-radius: 50%;
  }

  &.isRound {
    border-radius: 25% / 50%;
  }

  > .mmq-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: mmq-spin 1s infinite linear;
  }
}

@keyframes mmq-spin {
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
}
</style>
