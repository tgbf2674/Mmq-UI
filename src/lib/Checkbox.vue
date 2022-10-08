<template>
  <label :class="['mmq-checkbox']">
    <input :disabled="isDisabled" v-model="model" :value="label" :checked="isChecked" :indeterminate="indeterminate" type="checkbox" class="mmq-checkbox-input" @change="select"/>
    <span class="mmq-checkbox-label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script lang="ts">
import {computed, ComputedRef, defineComponent, inject, ref, watch, watchEffect} from 'vue';

interface CheckboxGroupType {
  name?: string,
  modelValue?: ComputedRef,
  changeEvent?: (val: unknown) => void,
  max?: number,
  min?: number,
  disabled?: boolean
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
    const isLimitDisabled = computed(() =>{
      const max = checkboxGroup.max
      const min = checkboxGroup.min
      if (Array.isArray(model.value))
      return (
        (max && model.value.length >= max && !isChecked.value) ||
        (min && min !== 0 && model.value.length <= min && isChecked.value)
      )
    })
    const isDisabled = computed(() =>  {
      return checkboxGroup.disabled || isLimitDisabled.value
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
    return {select, model, isChecked, isDisabled};
  }
});
</script>

<style scoped>

</style>
