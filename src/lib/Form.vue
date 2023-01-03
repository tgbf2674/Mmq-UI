<template>
  <form class="mmq-form">
    <slot></slot>
  </form>
</template>

<script lang="ts">
import {computed, defineComponent, getCurrentInstance, inject, onMounted, provide, ref} from 'vue';
import AsyncValidator from 'async-validator';
import mitt from 'mitt';

export const emitter = mitt();

export default defineComponent({
  name: 'MqForm',
  props: {
    model: {
      type: Object,
      required: true
    },
    rules: {
      type: Object,
      default: undefined
    }
  },
  setup(props, context) {
    const fields: any = ref([]);
    const formError = ref({});
    const formRules = computed(() => {
      const descriptor: any = {};
      fields.value.forEach(({prop}) => {
        if (props.rules) {
          if (!Array.isArray(props.rules[prop])) {
            console.error(`prop 为 ${prop} 的 FormItem 校验规则不存在或者其值不是数组`);
            descriptor[prop] = [{required: true}];
            return;
          }
          descriptor[prop] = props.rules[prop];
        }
      });
      return descriptor;
    });
    const formValue = computed(() => {
      return fields.value.reduce((data: any, {prop}) => {
        data[prop] = props.model[prop];
        return data;
      }, {});
    });
    const validate = (callback: Function) => {
      const validator = new AsyncValidator(formRules.value);
      validator.validate(formValue.value, (errors: any) => {
        let formError: any = {};
        if (errors && errors.length) {
          errors.forEach((item: any) => {
            formError[item.field] = item.message;
          });
        } else {
          formError = {};
        }
        formError.value = formError;
        emitter.emit('formError', formError.value)
        const errInfo: any[] = [];
        fields.value.forEach((item: any) => {
          if (formError[item.prop]) {
            errInfo.push(formError[item.prop]);
          }
        });
        callback(errInfo);
      });
    };
    provide('formErrorArr', formError);
    emitter.on('form.addField', (field: any) => {
      if (field) {
        fields.value.push(field);
      }
    });
    emitter.on('form.removeField', (field: any) => {
      if (field) {
        fields.value = fields.value.filter((item: { prop: string, el: any }) => {
          return item.prop !== field.prop;
        });
      }
    });
    return {
      fields, formError, validate
    };
  }
});
</script>

<style scoped>

</style>
