<template>
  <div class="gulu-checkboxGroup">
    <slot />
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, provide} from 'vue';

export default defineComponent ({
  name: 'CheckoutGroup',
  props: {
    modelValue: {
      type: Array,
      required: true,
      default: () => undefined
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['change', 'update:modelValue'],
  setup(props, ctx) {
    const changeEvent = (val: unknown) => {
      ctx.emit('update:modelValue', val);
      ctx.emit('change', val)
    };

    const modelValue = computed(() => props.modelValue);
    provide(
      'CheckboxGroupContext', {
        name: 'CheckboxGroupContext',
        modelValue,
        changeEvent
      }
    )
  }
})
</script>

<style scoped>

</style>
