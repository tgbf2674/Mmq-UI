<template>
  <span class="mmq-inputNumber">
    <div class="mmq-inputNumber-decrease" @click="handleButtonMinus">➖</div>
    <Input v-model:input-value="modelValue" @input="handleInputValue"/>
    <div class="mmq-inputNumber-increase" @click="handleButtonAdd">➕</div>
  </span>
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
      context.emit('update:modelValue', props.modelValue - 1)
    }
    const handleButtonAdd = () => {
      context.emit('update:modelValue', props.modelValue + 1)
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
@import "./src/style/theme.scss";
.mmq-inputNumber {
  display: inline-flex;
  align-items: center;
  border-radius: 4px;
  &:hover {
    border: 1px solid #bdbec1;
  }
  &-decrease {
    width: 30px;
    height: 30px;
    border: 1px solid #dcdfe6;
    border-right: none;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 8px;
  }
  &-increase {
    width: 30px;
    height: 30px;
    border: 1px solid #dcdfe6;
    border-left: none;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 8px;
  }
}
::v-deep .mmq-input-inner {
  border-radius: 0;
  width: 110px;
  text-align: center;
  &:hover {
    border-color: #bdbec1;
    border-left: 1px solid #dcdfe6;
    border-right: 1px solid #dcdfe6;
  }
  &:focus {
    border-color: #bdbec1;
    border-left: 1px solid #dcdfe6;
    border-right: 1px solid #dcdfe6;
  }
}
</style>
