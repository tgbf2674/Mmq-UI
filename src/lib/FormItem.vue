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
import {computed, defineComponent, inject, onMounted, onUnmounted, ref} from 'vue';
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
    const error = ref('');
    onMounted(() => {
      if (props.prop) {
        dispatchEvent('form.addField', {
          prop: props.prop
        })
      }
    })
    const fieldError = computed(() => {
      if (props.prop) return ''
      const formError = inject<any>('FormInstance').formError
      return formError[props.prop] || ''
    })
    const dispatchEvent = (eventName: string, params: any) => {
      inject<any>('FormInstance').emitter.emit(eventName, params)
    }
    onUnmounted(() => {
      if (props.prop) {
        dispatchEvent('form.removeField', {
          prop: props.prop
        })
      }
    })
    return {
      error, fieldError
    };
  }
});
</script>

<style scoped>

</style>
