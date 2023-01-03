<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <div>
      <slot></slot>
      <p v-if="fieldError">{{ fieldError }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, inject, onMounted, onUnmounted, ref, watch, watchEffect} from 'vue';
import {emitter} from './Form.vue'
export default defineComponent({
  name: 'FormItem',
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String,
      default: ''
    }
  },
  setup(props, context) {
    onMounted(() => {
      if (props.prop) {
        dispatchEvent('form.addField', {
          prop: props.prop
        })
      }
      emitter.on('formError', (val: any) => {
        error.value = val[props.prop]
      })
    })
    let error = ref()
    const fieldError = computed(() => {
      if (!props.prop) return ''
      return error.value || ''
    })
    const dispatchEvent = (eventName: string, params: any) => {
      emitter.emit(eventName, params)
    }
    onUnmounted(() => {
      if (props.prop) {
        dispatchEvent('form.removeField', {
          prop: props.prop
        })
      }
    })
    return {
      fieldError
    };
  }
});
</script>

<style scoped>

</style>
