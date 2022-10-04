<template>
  <label :class="['gulu-checkbox']">
    <input :disabled="disabled" v-model="model" :value="label" :checked="isChecked" :indeterminate="indeterminate" type="checkbox" class="gulu-checkbox-input" @change="select"/>
    <span class="gulu-checkbox-label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script lang="ts">
import {computed, ComputedRef, defineComponent, inject, onMounted, ref} from 'vue';

interface CheckboxGroupType {
  name?: string,
  modelValue?: ComputedRef,
  changeEvent?: (val: unknown) => void
}

export default defineComponent({
  name: 'checkbox',
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    indeterminate: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const checkboxGroup = inject<CheckboxGroupType>('CheckboxGroupContext', {});
    const isGroup = checkboxGroup.name === 'CheckboxGroupContext'
    const store =computed(() => checkboxGroup ? checkboxGroup.modelValue?.value : props.modelValue)
    const model = computed({
      get() {
        return isGroup ? store.value : props.modelValue;
      },
      set(val) {
        if (isGroup) {
          return checkboxGroup.changeEvent!(val)
        }
        context.emit('update:modelValue', val)
      }
    })
    const isChecked = computed(() => {
      const value = model.value
      if (Array.isArray(value)) {
        return value.includes(props.label)
      } else {
        return value
      }
    })
    const select = (e: InputEvent) => {
      const target = e.target as HTMLInputElement
      context.emit('update:modelValue', target.checked)
    };
    return {select, model, isChecked};
  }
});
</script>

<style scoped>

</style>
