<template>
  <div ref="selectRef" class="mmq-select">
    <div class="mmq-select-text-wrap">
      <input :readonly="!filterable" :disabled="disabled"
             :class="['mmq-select-input', size, disabled ? 'disabled' : '']" type="text"
             :value="modelValue" @input="handleInputTextChange" :placeholder="placeholder"
             @click.stop="showOptions = !showOptions"/>
      <div class="mmq-select-icon-wrap">
        <Icon :name="showOptions ? 'icon-menudown' : showClearIcon ? '' : 'icon-menuright' "></Icon>
        <Icon v-if="showClearIcon" @click.stop="handleClearInputText" name="icon-close"></Icon>
      </div>
    </div>
    <transition name="mmq-select-transition">
      <div v-show="showOptions" class="mmq-select-options-slots">
        <template v-if="filterResultList.length && isSearchIn && modelValue.length > 0">
          <MqSelectOption v-for="item in filterResultList" :value="item.value" :key="item.value"
                          :label="item.label"></MqSelectOption>
        </template>
        <slot v-if="(modelValue.length === 0 || !isSearchIn)"></slot>
        <div
          class="select-empty"
          v-if="
            (!loading &&
              ((!filterResultList.length && isSearchIn && modelValue.length > 0) ||
                !filterDataList.length))
          "
        >
          暂无数据
        </div>
        <div class="select-loading" v-if="loading">加载中...</div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, getCurrentInstance, onMounted, provide, reactive, ref} from 'vue';
import MqSelectOption from './MqSelectOption.vue';
import Icon from './Icon.vue';
import mitt from 'mitt';
import re from '../../index';

export const emitter = mitt();
export default defineComponent({
  name: 'MqSelect',
  components: {MqSelectOption, Icon},
  props: {
    placeholder: {
      type: String,
      default: '请输入'
    },
    modelValue: {
      type: [String, Array, Number, Boolean],
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'normal'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    filterable: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const showCancel = ref(false);
    const showOptions = ref(false);
    let currentLabel = ref('');
    const selectRef = ref<InstanceType<typeof HTMLElement>>();
    const labelList = ref([] as Array<any>);
    const valueList = ref([] as Array<any>);
    const filterResultList = ref([] as Array<any>);
    const filterDataList = ref([] as Array<any>);
    const isSearchIn = ref(false);
    const defaults: any = context.slots.default!()[0].children;
    provide('selectContext', props);
    const showClearIcon = computed(() => {
      return props.clearable && props.modelValue && showCancel;
    });
    const handleCloseOptions = () => {
      showOptions.value = false;
    };
    const getSearchData = () => {
      filterDataList.value = defaults.map((item: any) => {
        const value = item.props.value;
        const label = item.props.label;
        return {
          value, label
        };
      });
    };
    const setSearchData = (value: any) => {
      isSearchIn.value = true;
      filterResultList.value = filterDataList.value.filter((item) => item.label.includes(value));
    };
    onMounted(() => {
      const internalInstance = getCurrentInstance();
      emitter.on('onChange', (val: any) => {
        const {uid} = val;
        if (internalInstance!.uid !== uid) {
          return;
        }
        handleOptionsHandle(val);
      });
      document.addEventListener('click', (e) => {
        const target: EventTarget = e.target!;
        if (selectRef) {
          const isSelf = selectRef.value!.contains(target as Node);
          if (!isSelf) handleCloseOptions();
        }
      }, false);
      getSearchData();
    });
    const handleOptionsHandle = (value: any) => {
      if (!props.multiple) {
        showOptions.value = false;
        currentLabel.value = value.label;
        context.emit('onChange', value);
        context.emit('update:modelValue', value.label);
      } else {
        const index = labelList.value.findIndex((item: any) => {
          return item === value.label;
        });
        if (index >= 0) {
          valueList.value.splice(index, 1);
          labelList.value.splice(index, 1);
        } else {
          valueList.value.push(value.value);
          labelList.value.push(value.label);
        }
        currentLabel.value = labelList.value.join(', ');
        context.emit('onChange', {label: labelList.value, value: valueList.value});
        context.emit('update:modelValue', currentLabel.value);
      }
      isSearchIn.value = false;
    };
    const handleInputTextChange = (e: InputEvent) => {
      const target = e.target as HTMLInputElement;
      context.emit('update:modelValue', target.value);
      context.emit('onChange', currentLabel);
      setSearchData(target.value);
    };
    const handleClearInputText = () => {
      context.emit('update:modelValue', '');
      currentLabel.value = '';
      showCancel.value = false;
      showOptions.value = false;
      context.emit('onChange', '');
    };
    return {
      showClearIcon,
      showOptions,
      handleInputTextChange,
      handleClearInputText,
      currentLabel,
      selectRef,
      filterResultList,
      isSearchIn,
      filterDataList
    };
  }
});
</script>

<style lang="scss" scoped>
.mmq-select {
  width: 240px;
  position: relative;
  margin: 20px;

  .mmq-select-input {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;

    &:focus {
      border-color: #409eff;
    }
  }

  .disabled {
    background: #f5f7fa;
    cursor: not-allowed;
  }

  .large {
    height: 40px;
    line-height: 40px;
  }

  .normal {
    height: 30px;
    line-height: 30px;
  }

  .small {
    height: 24px;
    line-height: 24px;
  }

  // 过度
  .mmq-select-transition-enter-active,
  .mmq-select-transition-leave-active {
    opacity: 1;
    transform: scaleY(1);
    transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1),
    opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1);
    transform-origin: center top;
  }

  .mmq-select-transition-enter-from,
  .mmq-select-transition-leave-to {
    opacity: 0;
    transform: scaleY(0);
  }
}

.mmq-select-options-slots {
  position: absolute;
  left: 0;
  top: 40px;
  text-align: center;
  max-height: 200px;
  overflow: scroll;
  overflow-x: hidden;
  border: 1px solid #e4e7ed;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  box-sizing: border-box;
  margin: 5px 0;
  width: 100%;
}

.mmq-select-text-wrap {
  display: flex;
  align-items: center;

  .mmq-select-icon-wrap {
    position: absolute;
    right: 14px;
  }
}

</style>
