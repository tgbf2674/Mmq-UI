<template>
  <label :class="['gulu-checkbox']">
    <input :disabled="disabled" :checked="value" type="checkbox" class="gulu-checkbox-input" @change="select"/>
    <span>{{ label }}</span>
  </label>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'checkbox',
  props: {
    label: {
      type: String,
    },
    value: {
      type: Boolean
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const select = (e: { target: HTMLInputElement }) => {
      context.emit('update:modelValue', e.target.checked)
    }
    return { select }
  }
})
</script>

<style scoped>

</style>
