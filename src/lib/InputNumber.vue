<template>
  <div class="mmq-inputNumber">
    <div class="mmq-inputNumber-decrease" @click="handleButtonMinus">-</div>
    <Input v-model:input-value="modelValue" @input="handleInputValue" />
    <div class="mmq-inputNumber-increase" @click="handleButtonAdd">+</div>
  </div>
</template>

<script>
import Input from './Input.vue'
import {defineComponent} from 'vue'
export default defineComponent({
  name: 'InputNumber',
  components: {Input},
  props: {
    modelValue: {
      type: Number,
      default: 0
    }
  },
  setup (props, context) {
    const handleButtonMinus = () => {
      console.log(props.modelValue - 1)
      context.emit('update:modelValue', props.modelValue - 1)
    }
    const handleButtonAdd = () => {
      const curVal = props.modelValue + 1
      context.emit('update:modelValue', curVal)
    }
    const handleInputValue = (value) => {
      context.emit('update:modelValue', value)
    }
    return {
      handleButtonAdd, handleButtonMinus, handleInputValue
    }
  }
})
</script>

<style lang="scss" scoped>
.mmq-inputNumber {
  display: flex;
  align-items: center;
  &-decrease {
    width: 30px;
    height: 30px;
    border: 1px solid #dcdfe6;
    border-right: none;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &-increase {
    width: 30px;
    height: 30px;
    border: 1px solid #dcdfe6;
    border-left: none;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
::v-deep .mmq-input-inner {
  border-radius: 0;
  width: 110px;
}
</style>
