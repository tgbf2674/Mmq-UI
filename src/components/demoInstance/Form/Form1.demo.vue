<demo>
基本使用
</demo>
<template>
  <MqForm :model="formData" :rules="rules" ref="formRef">
    <MqFormItem label="手机号" prop="tel">
      <input type="tel" maxlength="11" v-model="formData.tel"/>
    </MqFormItem>
  </MqForm>
  <button @click="handleClick">tijiao</button>
</template>

<script lang="ts">
import MqForm from '../../../lib/Form.vue'
import MqFormItem from '../../../lib/FormItem.vue'
import {ref} from 'vue';
export default {
  name: 'Form1.demo',
  components: {MqForm, MqFormItem},
  setup() {
    const formData = ref({tel: ''})
    const formRef= ref()
    const rules = ref({
      tel: [
        {required: true, message: '您的手机号码未输入'},
        {pattern: /^1[34578]\d{9}$/, message: '您的手机号码输入错误'}
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
