<demo>
基本使用
</demo>
<template>
  <MqForm :model="formData" :rules="rules" ref="formRef">
    <MqFormItem label="手机号" prop="tel">
      <MqInput type="tel" v-model:input-value="formData.tel"/>
    </MqFormItem>
    <MqFormItem label="区域" prop="region">
      <MqSelect v-model="formData.region">
        <MqSelectOption label="one" value="shanghai"></MqSelectOption>
        <MqSelectOption label="two" value="beijing"></MqSelectOption>
      </MqSelect>
    </MqFormItem>
  </MqForm>
  <MqButton level="main" @click="handleClick">提交</MqButton>
</template>

<script lang="ts">
import MqForm from '../../../lib/Form.vue'
import MqFormItem from '../../../lib/FormItem.vue'
import MqInput from '../../../lib/Input.vue'
import {MqButton, MqSelect, MqSelectOption} from '../../../lib';
import {ref} from 'vue';
export default {
  name: 'Form1.demo',
  components: {MqForm, MqFormItem, MqInput, MqButton, MqSelect, MqSelectOption},
  setup() {
    const formData = ref({tel: '', region: ''})
    const formRef= ref()
    const rules = ref({
      tel: [
        {required: true, message: '您的手机号码未输入'},
        {pattern: /^1[34578]\d{9}$/, message: '您的手机号码输入错误'}
      ],
      region: [
        {
          required: true, message: '请选择区域'
        }
      ]
    })
    const handleClick = () => {
      formRef.value.validate((errs: any) => {
        console.log(errs)
      })
    }
    return {
      formData, rules, formRef, handleClick
    }
  }
}
</script>

<style scoped>

</style>
