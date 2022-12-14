<template>
  <div v-bind="$attrs" :class="[disabled ?'is-disabled': '', classSize, 'mmq-input']">
    <span v-if="prefixIcon" class="mmq-input-icon-prefix">
      <MqIcon>
        <component color="#999999" :is="prefixIcon"></component>
      </MqIcon>
    </span>
    <input v-model="childInputValue" :type="childInputType" :class="['mmq-input-inner']"
           @change="onChangHandle" @keydown="onkeydownHandle" @input="inputChange" :disabled="disabled"
           :placeholder="placeholder"/>
    <span v-if="clearable && childInputValue" class="mmq-input-icon-wrapper">
      <MqIcon @click="clearInputValue" :font-size="IconSize" color="#d2d0d0">
        <CircleClose/>
      </MqIcon>
    </span>
    <span v-if="type==='password' && childInputValue" class="mmq-input-icon-wrapper">
      <MqIcon @click="changeInputType" :font-size="IconSize" color="#d2d0d0">
        <Hide/>
      </MqIcon>
    </span>
    <span v-if="maxlength" class="mmq-input-count-wrapper">{{ countNum }}/{{ maxlength }}</span>
    <span v-if="suffixIcon" class="mmq-input-icon-suffix">
      <MqIcon>
        <component color="#999999" :is="suffixIcon"></component>
      </MqIcon>
    </span>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, PropType, ref, watchEffect} from 'vue';
import MqIcon from './MqIcon.vue';

export default defineComponent({
  name: 'MqInput',
  components: {MqIcon},
  inheritAttrs: false,
  props: {
    placeholder: {
      type: String,
      default: '请输入内容'
    },
    inputValue: {
      type: [String, Number],
      default: ''
    },
    size: {
      type: String as PropType<InputSizeOptions>,
      default: 'normal'
    },
    type: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    maxlength: {
      type: Number
    },
    prefixIcon: {
      type: String
    },
    suffixIcon: {
      type: String
    }
  },
  emits: ['input', 'change', 'focus', 'blur', 'mouseleave', 'mouseenter', 'keydown', 'update:inputValue'],
  setup(props, context) {
    const inputChange = () => {
      context.emit('input', childInputValue.value);
      context.emit('update:inputValue', childInputValue.value);
    };
    const clearInputValue = () => {
      childInputValue.value = '';
      context.emit('update:inputValue', '');
    };
    const classSize = computed(() => {
      return `mmq-size-${props.size}`;
    });
    const IconSize = computed(() => {
      if (props.size === 'large') return 18;
      else if (props.size === 'normal') return 16;
      else return 14;
    });
    const changeInputType = () => {
      childInputType.value = childInputType.value === 'text' ? 'password' : 'text';
    };
    const countNum = computed(() => {
      return childInputValue.value.length || 0;
    });
    const onChangHandle = () => {
      context.emit('change', childInputValue.value);
    };
    const onkeydownHandle = (e: KeyboardEvent) => {
      if (e.keyCode === 13)
        context.emit('keydown', e);
    };
    const childInputValue = ref();
    watchEffect(() => {
      childInputValue.value = props.inputValue;
    });
    const childInputType = ref(props.type);
    watchEffect(() => {
      if (countNum.value > Number(props.maxlength)) {
        childInputValue.value = childInputValue.value.slice(0, Number(props.maxlength) * 1);
      }
    });
    return {
      inputChange,
      childInputValue,
      clearInputValue,
      childInputType,
      changeInputType,
      countNum,
      onkeydownHandle,
      onChangHandle,
      classSize,
      IconSize
    };
  }
});
</script>

<style lang="scss" scoped>
@import "./src/style/theme.scss";

.mmq-input {
  position: relative;
  display: inline-flex;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  width: 100%;
  align-items: center;

  &::placeholder {
    color: #c0c4cc;
  }

  &:hover {
    border: 1px solid #bdbec1;
    transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
    transition-property: border-color;
    transition-duration: 0.2s;
    transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
    transition-delay: 0s;
  }

  .mmq-input-inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    box-sizing: border-box;
    color: #606266;
    display: inline-flex;
    font-size: inherit;
    border-radius: 4px;
    outline: none;
    width: 100%;
    border: none;
    flex: 1;
    margin: 0 6px;
  }

  .mmq-input-icon-wrapper {
    height: 100%;
    margin-right: 4px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .mmq-input-icon-prefix {
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-left: 6px;
  }

  .mmq-input-icon-suffix {
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-right: 6px;
  }

  .mmq-input-count-wrapper {
    display: flex;
    align-items: center;
    height: 100%;
    color: #909399;
    font-size: 12px;
    margin-right: 4px;
  }

  &.is-disabled {
    background-color: #f5f7fa;
    border-color: #e4e7ed;
    cursor: not-allowed;
    .mmq-input-inner {
      background-color: #f5f7fa;
      cursor: not-allowed;
    }
  }
}
.mmq-size-large {
  height: 38px;
  font-size: 16px;
}
.mmq-size-normal {
  height: 30px;
  font-size: 14px;
}
.mmq-size-small {
  height: 22px;
  font-size: 12px;
}
</style>
