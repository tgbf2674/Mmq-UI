<template>
  <label :class="['gulu-checkbox']">
    <input :disabled="disabled" :value="modelValue" type="checkbox" class="gulu-checkbox-input" @change="select"/>
    <span>{{ label }}{{ value }}</span>
  </label>
</template>

<script lang="ts">
import {computed, defineComponent, inject, onMounted, watch} from 'vue';

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
    onMounted(() => {
      console.log(props.modelValue)
    })
    // onMounted(() => {
    //   console.log(hasCheckGroup, 'hahaha')
    //   hasCheckGroup.forEach(item => {
    //     if (item === props.label) {
    //       context.emit('update:modelValue', true);
    //     }
    //   })
    // })
    const select = (e: { target: HTMLInputElement }) => {
      e.target.checked ? context.emit('update:modelValue', false) : context.emit('update:modelValue', true)
    };
    return {select};
  }
});
</script>

<style scoped>

</style>
