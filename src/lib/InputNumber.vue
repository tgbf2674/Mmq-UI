<template>
  <div ref="inputNumberRef" :class="['mmq-inputNumber', disabled && 'disabled']">
    <div :style="MinusNotAllowedStyle">
      <div :style="MinusPointerNoneStyle" :class="['mmq-inputNumber-decrease']" @click.prevent="handleButtonMinus">
        <MqIcon>
          <Minus />
        </MqIcon>
      </div>
    </div>
    <Input :disabled="disabled" placeholder v-model:input-value="inputValue" @change="handleChange"/>
    <div :style="IncreaseNotAllowedStyle">
      <div :style="IncreasePointerNoneStyle" class="mmq-inputNumber-increase" @click.stop="handleButtonAdd">
        <MqIcon>
          <Plus />
        </MqIcon>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Input from './Input.vue'
import {defineComponent, watchEffect, ref, computed, onMounted} from 'vue';
import {add, subtract} from 'mmq-utils'
export default defineComponent({
  name: 'InputNumber',
  components: {Input},
  props: {
    modelValue: {
      type: [Number,String],
      default: 0
    },
    disabled: {
      type: Boolean,
      default: false
    },
    min: {
      type: Number,
      default: -Infinity
    },
    max: {
      type: Number,
      default: +Infinity
    },
    step: {
      type: Number,
      default: 1
    },
    precision: {
      type: Number,
      default: undefined
    }
  },
  setup(props, context) {
    const inputValue = ref()
    const inputNumberRef = ref()
    const canMinusClick = () => {
      return !props.disabled && inputValue.value > props.min
    }
    const canIncreaseClick = () => {
      return !props.disabled && inputValue.value < props.max
    }
    const MinusNotAllowedStyle = computed(() => {
      if (!canMinusClick()) return {
        cursor: 'not-Allowed'
      }
    })
    const MinusPointerNoneStyle = computed(() => {
      if (!canMinusClick()) return {
        pointerEvents: 'none'
      }
    })
    const IncreaseNotAllowedStyle = computed(() => {
      if (!canIncreaseClick()) return {
        cursor: 'not-Allowed'
      }
    })
    const IncreasePointerNoneStyle = computed(() => {
      if (!canIncreaseClick()) return {
        pointerEvents: 'none'
      }
    })
    watchEffect(() => {
      inputValue.value = props.modelValue
      if (props.precision) {
        inputValue.value = Number(props.modelValue).toFixed(props.precision)
      }
    })
    const handleButtonMinus = () => {
      const curVal = subtract(props.modelValue, props.step)
      if (curVal < props.min) {
        context.emit('update:modelValue', props.min)
      } else {
        context.emit('update:modelValue', curVal)
      }
    }
    const handleButtonAdd = () => {
      const curVal = add(props.modelValue, props.step)
      curVal > props.max ? context.emit('update:modelValue', props.max) : context.emit('update:modelValue', curVal)
    }
    const handleChange = (value: any) => {
      const isNumber = (/^-?\d*\.?\d+$/).test(value)
      if (isNumber) value = Number(value)
      else value = 0
      value ? context.emit('update:modelValue', value) : context.emit('update:modelValue', 0)
    }
    return {
      handleButtonAdd,
      handleButtonMinus,
      handleChange,
      inputValue,
      inputNumberRef,
      canMinusClick,
      canIncreaseClick,
      MinusNotAllowedStyle,
      MinusPointerNoneStyle,
      IncreaseNotAllowedStyle,
      IncreasePointerNoneStyle
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
    font-size: 8px;
    background: #f5f7fa;
    cursor: pointer;
    &:hover {
      fill: #409eff;
    }
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
    font-size: 8px;
    background: #f5f7fa;
    cursor: pointer;
    &:hover {
      fill: #409eff;
    }
  }
}

::v-deep .mmq-input-inner {
  border-radius: 0;
  width: 110px;
  text-align: center;

  &:hover {
    border-color: #bdbec1;
    border-left-color: #dcdfe6;
    border-right-color: #dcdfe6;
  }

  &:focus {
    border-color: #dcdfe6;
  }
}

.disabled {
  cursor: not-allowed;

  &:hover {
    border: none;
  }

  ::v-deep .mmq-input-inner {
    cursor: not-allowed;

    &:hover {
      border-color: #dcdfe6;
    }
  }
}
</style>
