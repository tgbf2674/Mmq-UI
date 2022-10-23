<template>
  <div class="mmq-checkboxGroup">
    <slot />
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, provide} from 'vue';

export default defineComponent ({
  name: 'MqCheckoutGroup',
  props: {
    modelValue: {
      type: Array,
      required: true,
      default: () => undefined
    },
    disabled: {
      type: Boolean,
      default: false
    },
    max: {
      type: Number
    },
    min: {
      type: Number
    }
  },
  emits: ['change', 'update:modelValue'],
  setup(props, ctx) {
    const modelValue = computed(() => props.modelValue);
    provide(
      'CheckboxGroupContext', {
        name: 'CheckboxGroupContext',
        disabled: props.disabled,
        modelValue,
        max: props.max,
        min: props.min,
        changeEvent: (val: unknown) => {
          ctx.emit('update:modelValue', val);
          ctx.emit('change', val)
        }
      }
    )
  }
})
</script>

<style scoped>

</style>
