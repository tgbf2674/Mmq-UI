<demo>
基本使用
</demo>
<template>
  <h5>最基础的表单包括各种输入表单项，比如input、select、radio、checkbox等。

    在每一个 form 组件中，你需要一个 form-item 字段作为输入项的容器，用于获取值与验证值。</h5>
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
    <MqFormItem label="是否男性" prop="sex">
      <MqSwitch type="tel" close-text="否" open-text="是" v-model="formData.sex"/>
    </MqFormItem>
  </MqForm>
  <MqButton level="main" @click="handleClick">提交</MqButton>
  <MqButton @click="handleReset">重置</MqButton>
</template>

<script lang="ts">
import MqForm from '../../../lib/Form.vue'
import MqFormItem from '../../../lib/FormItem.vue'
import MqInput from '../../../lib/Input.vue'
import {MqButton, MqSelect, MqSelectOption, MqSwitch} from '../../../lib';
import {reactive, ref} from 'vue';
export default {
  name: 'Form1.demo',
  components: {MqForm, MqSwitch, MqFormItem, MqInput, MqButton, MqSelect, MqSelectOption},
  setup() {
    const formData = reactive({tel: '', region: '', sex: false})
    const formRef= ref()
    const rules = ref({
      tel: [
        {required: true, message: '您的手机号码未输入'},
        {pattern: /^1[34578]\d{9}$/, message: '您的手机号码输入错误'}
        // { min: 3, max: 5, message: '长度只能为3-5' }
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
    const handleReset = () => {
      formRef.value.resetFields()
    }
    return {
      formData, rules, formRef, handleClick, handleReset
    }
  }
}
</script>

<style scoped>

</style>
