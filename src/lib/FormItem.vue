<template>
  <div class="MqFormItem">
    <label :class="{isRequired}" v-if="label">{{ label }}</label>
    <div class="MqFormItemContent">
      <slot></slot>
      <transition name="fade">
        <div class="MqFormItemError" v-if="fieldError">{{ fieldError }}</div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, inject, onMounted, onUnmounted, ref, watch, watchEffect} from 'vue';
import {emitter} from './Form.vue';

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
        });
      }
      emitter.on('formError', (val: any) => {
        error.value = val[props.prop];
      });
      console.log(inject<any>('formRules').value.tel, 123);
    });
    const isRequired = computed(() => {
      let res = false;
      const rules = inject<any>('formRules').value;
      for (const key in rules[props.prop]) {
        if (rules[props.prop][key].required) res = true;
      }
      return res;
    });
    let error = ref();
    const fieldError = computed(() => {
      if (!props.prop) return '';
      return error.value || '';
    });
    const dispatchEvent = (eventName: string, params: FormFieldsOptions) => {
      emitter.emit(eventName, params);
    };
    onUnmounted(() => {
      if (props.prop) {
        dispatchEvent('form.removeField', {
          prop: props.prop
        });
      }
    });
    return {
      fieldError, isRequired
    };
  }
});
</script>

<style lang="scss" scoped>
.MqFormItem {
  margin-bottom: 18px;
  font-size: 14px;

  .MqFormItemContent {
    position: relative;
    font-size: 12px;
    .fade-enter-active, .fade-leave-active {
      transition: all .25s
    }
    .fade-enter-from, .fade-leave-to {
      opacity: 0
    }
    .MqFormItemError {
      color: #f56c6c;
      font-size: 12px;
      position: absolute;
      top: 100%;
      left: 0;
    }
  }

  .isRequired:before {
    content: '*';
    color: #f56c6c;
    margin-right: 4px;
  }
}
</style>
