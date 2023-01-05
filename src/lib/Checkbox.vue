<template>
  <label :class="{isChecked}" class="mmq-checkbox">
    <input :disabled="isDisabled" v-model="model" :value="label" :checked="isChecked" :indeterminate="indeterminate"
           type="checkbox" class="mmq-checkbox-input" @change="select"/>
    <span class="mmq-checkbox-inner"></span>
    <span class="mmq-checkbox-label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script lang="ts">
import {computed, ComputedRef, defineComponent, inject} from 'vue';

interface CheckboxGroupType {
  name?: string,
  modelValue?: ComputedRef,
  changeEvent?: (val: unknown) => void,
  max?: number,
  min?: number,
  disabled?: boolean
}

export default defineComponent({
  name: 'MqCheckbox',
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
    const isGroup = checkboxGroup.name === 'CheckboxGroupContext';
    const store = computed(() => checkboxGroup ? checkboxGroup.modelValue?.value : props.modelValue);
    const model = computed({
      get() {
        return isGroup ? store.value : props.modelValue;
      },
      set(val) {
        if (isGroup) {
          return checkboxGroup.changeEvent!(val);
        }
        context.emit('update:modelValue', val);
      }
    });
    const isLimitDisabled = computed(() => {
      const max = checkboxGroup.max;
      const min = checkboxGroup.min;
      if (Array.isArray(model.value) && (min || max)) {
        return (
          (max && model.value.length >= max && !isChecked.value) ||
          (min && min !== 0 && model.value.length <= min && isChecked.value)
        );
      } else {
        return props.disabled;
      }
    });
    const isDisabled = computed(() => {
      return checkboxGroup.disabled || isLimitDisabled.value;
    });
    const isChecked = computed(() => {
      const value = model.value;
      if (Array.isArray(value)) {
        return value.includes(props.label);
      } else {
        return value;
      }
    });
    const select = (e: InputEvent) => {
      const target = e.target as HTMLInputElement;
      context.emit('update:modelValue', target.checked);
    };
    return {select, model, isChecked, isDisabled};
  }
});
</script>

<style lang="scss" scoped>
.mmq-checkbox {
  cursor: pointer;
  display: inline-flex;
  height: 40px;
  align-items: center;
  margin-right: 30px;

  .mmq-checkbox-inner {
    position: relative;
    display: inline-block;
    width: 14px;
    height: 14px;
    border: 1px solid #dcdfe6;
    margin-right: 4px;
    transition: border-color .25s;
  }

  .mmq-checkbox-input {
    opacity: 0;
    outline: none;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;
  }

  .mmq-checkbox-label {
    color: #606266;
  }

  &.isChecked {
    .mmq-checkbox-inner {
      background-color: #409eff;
      border-color: #409eff;
      &:after {
        box-sizing: content-box;
        content: "";
        border: 1px solid #fff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 4px;
        position: absolute;
        top: 1px;
        transform: rotate(45deg);
        width: 3px;
        transition: transform .15s ease-in .05s;
        transform-origin: center;
      }
    }
    .mmq-checkbox-label {
      color: #409eff;
    }

  }
}
</style>
