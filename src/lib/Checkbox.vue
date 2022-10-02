<template>
  <label :class="['gulu-checkbox']">
    <input ref="checkboxRef" :disabled="disabled" :checked="modelValue" type="checkbox" class="gulu-checkbox-input" @change="select"/>
    <span>{{ label }}</span>
  </label>
</template>

<script lang="ts">
import {defineComponent, inject, onMounted, ref} from 'vue';

export default defineComponent({
  name: 'checkbox',
  props: {
    label: {
      type: String,
    },
    modelValue: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const hasCheckGroup: string [] = inject('CheckboxGroupContext', []);
    const checkboxRef = ref(null as HTMLInputElement|null)
    onMounted(() => {
      hasCheckGroup.forEach(item => {
        if (checkboxRef.value && item === props.label) {
          checkboxRef.value.checked = true
        }
      })
    })
    const select = (e: { target: HTMLInputElement }) => {
      context.emit('update:modelValue', e.target.checked)
    };
    return {select, checkboxRef};
  }
});
</script>

<style scoped>

</style>
