<template>
  <div class="mmq-input" :class="{'is-disabled':disabled,'el-input--suffix':clearable || type==='password' || suffixIcon,'el-input--prefix':prefixIcon}">
    <input v-bind="$attrs" v-model="childInputValue" :type="childInputType" class="mmq-input-inner" @change="onChangHandle" @keydown="onkeydownHandle" @input="inputChange" :disabled="disabled" :placeholder="placeholder">
    <span v-if="clearable && childInputValue" class="mmq-input-icon-wrapper">
            <Icon @click="clearInputValue" name="icon-error"/>
       </span>
    <span v-if="type==='password' && childInputValue" class="mmq-input-icon-wrapper">
            <Icon @click="changeInputType" name="icon-preview"/>
       </span>
    <span v-if="maxlength" class="mmq-input-count-wrapper">{{ countNum }}/{{ maxlength }}</span>
    <span v-if="prefixIcon" class="mmq-input-icon-prefix">
            <Icon :name="prefixIcon"/>
        </span>
    <span v-if="suffixIcon" class="mmq-input-icon-suffix">
            <Icon :name="suffixIcon"/>
        </span>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, ref, watchEffect} from 'vue';
import Icon from "./Icon.vue";
export default defineComponent({
  name: "MqInput",
  components: {Icon},
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
      type: String
    },
    prefixIcon: {
      type: String
    },
    suffixIcon: {
      type: String
    }
  },
  emits: ['input','change','focus','blur','mouseleave','mouseenter','keydown','update:inputValue'],
  setup(props, context) {
    const inputChange = () => {
      context.emit('update:inputValue', childInputValue.value);
    };
    const clearInputValue = () => {
      childInputValue.value = '';
      context.emit('update:inputValue', '');
    };
    const changeInputType = () => {
      childInputType.value = childInputType.value === 'text' ? 'password' : 'text';
    };
    const countNum = computed(() => {
      return childInputValue.value.length || 0;
    });
    const onChangHandle = (e: InputEvent) => {
      context.emit('change', e)
    }
    const onkeydownHandle = (e: KeyboardEvent) => {
      if(e.keyCode === 13)
      context.emit('keydown', e)
    }
    const childInputValue = ref('');
    watchEffect(() => {
       childInputValue.value = props.inputValue;
    });
    const childInputType = ref(props.type);
    watchEffect(() => {
      if (countNum.value > Number(props.maxlength)) {
        childInputValue.value = childInputValue.value.slice(0, Number(props.maxlength) * 1);
      }
    });
    return {inputChange, childInputValue, clearInputValue, childInputType, changeInputType, countNum, onkeydownHandle, onChangHandle};
  }
});
</script>

<style lang="scss">
@import "./src/style/theme.scss";
%mmq-input-icon {
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  height: 30px;
  font-size: 10px;
  fill: #999999;
}
.mmq-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  .mmq-input-inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 30px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    width: 100%;
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
      cursor: pointer;
    }
    &:focus {
      outline: none;
      border-color: $mmq-type-primary;
    }
  }
  .mmq-input-icon-wrapper {
    position: absolute;
    height: 40px;
    right: 10px;
    top: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    svg {
      fill: #d2d0d0;
      font-size: 15px;
      &:hover {
        fill: #82848a;
      }
    }
  }
  .mmq-input-icon-prefix {
    @extend %mmq-input-icon;
    left: 0;
    margin-left: 10px;
    margin-right: 5px;
  }
  .mmq-input-icon-suffix {
    @extend %mmq-input-icon;
    right: 0;
    margin-left: 5px;
    margin-right: 10px;
  }
  .mmq-input-count-wrapper {
    position: absolute;
    display: flex;
    align-items: center;
    top: 0;
    right: 5px;
    height: 40px;
    color: #909399;
    font-size: 12px;
  }
  &.is-disabled {
    .mmq-input-inner {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
  &.el-input--suffix {
    .mmq-input-inner {
      padding-right: 30px;
    }
  }
  &.el-input--prefix {
    .mmq-input-inner {
      padding-left: 40px;
    }
  }
}
</style>
