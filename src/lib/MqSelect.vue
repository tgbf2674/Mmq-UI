<template>
  <div class="mmq-select">
    <div class="mmq-select-text-wrap">
      <input :class="['mmq-select-input', size]" type="text" :value="currentLabel" @input="handleInputTextChange" :placeholder="placeholder" @click.stop="showOptions = !showOptions" />
      <div class="mmq-select-icon-wrap">
        <Icon :name="showOptions ? 'icon-menudown' : 'icon-menuright' "></Icon>
        <Icon v-if="showClearIcon" @click.stop="handleClearInputText" name="icon-close"></Icon>
      </div>
    </div>
    <transition name="mmq-select-transition">
      <div v-show="showOptions" class="mmq-select-options-slots">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted, ref} from 'vue';
import MqSelectOption from './MqSelectOption.vue'
import Icon from './Icon.vue';
import mitt from 'mitt';
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
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'normal'
    }
  },
  setup(props, context) {
    const showCancel = ref(false)
    const showOptions = ref(false)
    const currentLabel = ref('')
    const showClearIcon = computed(() => {
      return props.clearable && props.modelValue?.length && showCancel
    })
    const handleCloseOptions = () => {
      showOptions.value = false
    }
    onMounted(() => {
      emitter.on('onChange', handleOptionsHandle)
      document.addEventListener('click', handleCloseOptions, false)
    })
    const handleOptionsHandle = (value: any) => {
      showOptions.value = false
      currentLabel.value = value.label
      context.emit('onChange', value.label)
      context.emit('update:modelValue', value.value)
    }
    const handleInputTextChange = (e: InputEvent) => {
      const target = e.target as HTMLInputElement
      context.emit('update:modelValue', target.value)
    }
    const handleClearInputText = () => {
      context.emit('update:modelValue', '')
      showCancel.value = false
      showOptions.value = false
      context.emit('onChange', '')
    }
    return {
      showClearIcon, showOptions, handleInputTextChange, handleClearInputText, currentLabel
    }
  }
})
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
