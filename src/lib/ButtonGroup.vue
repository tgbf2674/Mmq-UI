<template>
  <div class="mmq-buttonGroup">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, provide } from "vue";

export default defineComponent({
  name: 'MqButtonGroup',
  props: {
    size: {
      type: String as PropType<ButtonSize>
    },
    level: {
      type: String as PropType<ButtonLevel>
    }
  },
  setup(props) {
    provide(
      'buttonGroupContext', {size: props.size, level: props.level}
    )
    return {
    }
  }
})
</script>

<style lang="scss">
.mmq-buttonGroup > .mmq-button {
  & + .mmq-button {
    margin-left: 0;
  }
  &:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  &:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
   &:not(:first-child):not(:last-child) {
      border-radius: 0;
    }
    &:not(:last-child) {
      margin-right: -1px;
    }
}
</style>
