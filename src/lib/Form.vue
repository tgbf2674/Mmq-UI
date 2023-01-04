<template>
  <form ref="MqFormRef" class="mmq-form">
    <slot></slot>
  </form>
</template>

<script lang="ts">
import {computed, defineComponent, getCurrentInstance, onMounted, provide, ref} from 'vue';
import AsyncValidator from 'async-validator';
import mitt from 'mitt';
import {clone} from 'mmq-utils';

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
    const fields = ref([]);
    const formError = ref({});
    const MqFormRef = ref()
    const initValues = clone(props.model, true)
    const resetFields = () => {
      formError.value = []
      emitter.emit('formError', formError.value)
      for (const key in props.model) {
        props.model[key] = initValues[key]
      }
    }
    const formRules = computed(() => {
      const descriptor: any = {};
      fields.value.forEach((item: FormFieldsOptions) => {
        const prop = item.prop;
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
      return fields.value.reduce((data, {prop}) => {
        (data as any)[prop] = props.model[prop];
        return data;
      }, {});
    });
    const validate = (callback?: Function) => {
      const validator = new AsyncValidator(formRules.value);
      validator.validate(formValue.value, (errors) => {
        let formErrorTemp: FormErrorOptions = {};
        if (errors && errors.length) {
          errors.forEach((item) => {
            if (item.field && item.message) {
              formErrorTemp[item.field] = item.message;
            }
          });
        } else {
          formErrorTemp = {};
        }
        formError.value = formErrorTemp;
        emitter.emit('formError', formError.value);
        const errInfo: any[] = [];
        fields.value.forEach((item: FormErrorOptions) => {
          if (formErrorTemp[item.prop]) {
            errInfo.push(formErrorTemp[item.prop]);
          }
        });
        if (callback) {
          callback(errInfo);
        }
      });
    };
    provide('formRules', formRules)
    emitter.on('form.addField', (field) => {
      fields.value.push(field);
    });
    emitter.on('form.removeField', (field: any) => {
      if (field) {
        fields.value = fields.value.filter((item: FormFieldsOptions) => {
          return item.prop !== field.prop;
        });
      }
    });
    return {
      fields, formError, validate, MqFormRef, resetFields
    };
  }
});
</script>

<style scoped>

</style>
