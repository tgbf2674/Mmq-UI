<template>
  <div class="mmq-switch-text-wrapper">
    <div :class="!checkedValue && inlinePrompt ? 'mmq-switch-text-selected' : '' ">{{ closeText }}</div>
    <div :class="['mmq-switch-wrapper', disabled ? 'mmq-switch-disabled' : '']">
      <div :class="['mmq-switch-status', switchStatusClass]"
           :style="{background: checkedValue ? openColor : closeColor, borderColor: checkedValue ? `1px solid ${openColor}` : `1px solid ${closeColor}`}"
           @click="changeSwitchStatus">
        <span class="mmq-switch-text">{{ inlinePrompt ? switchStatusText : '' }}</span>
      </div>
    </div>
    <div :class="checkedValue && inlinePrompt ? 'mmq-switch-text-selected' : '' ">{{ openText }}</div>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref, watchEffect} from 'vue';

export default defineComponent({
  name: 'MqSwitch',
  props: {
    modelValue: {
      required: true,
      default: false,
      type: Boolean || String || Number
    },
    openValue: {
      type: Boolean || String || Number,
      default: true
    },
    closeValue: {
      type: Boolean || String || Number,
      default: false
    },
    openColor: {
      type: String,
      default: '#40a9ff'
    },
    closeColor: {
      type: String,
      default: '#d9d9d9'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    openText: {
      type: String,
      default: ''
    },
    closeText: {
      type: String,
      default: ''
    },
    inlinePrompt: {
      type: Boolean,
      default: true
    }
  },
  setup(props, context) {
    const checkedValue = ref(props.modelValue);
    const switchStatusClass = ref('mmq-switch-close');
    const switchStatusText = ref('');
    const changeSwitchStatus = (e: Event) => {
      if (props.disabled) return;
      checkedValue.value === props.openValue ? checkedValue.value = props.closeValue : checkedValue.value = props.openValue
      context.emit('update:modelValue', checkedValue.value);
      context.emit('change', checkedValue.value);
    };
    onMounted(() => {
      props.modelValue ? checkedValue.value = props.openValue : checkedValue.value = props.closeValue;
    });

    watchEffect(() => {
      if (checkedValue.value) {
        switchStatusClass.value = 'mmq-switch-open';
        switchStatusText.value = props.openText;
      } else {
        switchStatusClass.value = 'mmq-switch-close';
        switchStatusText.value = props.closeText;
      }
    });
    return {
      switchStatusClass, switchStatusText, changeSwitchStatus, checkedValue
    };
  }
});
</script>

<style lang="scss" scoped>
.mmq-switch-text-wrapper {
  display: flex;
  align-items: center;
}

.mmq-switch-wrapper {
  min-width: 44px;
  height: 24px;
  margin: 0 10px;
  cursor: pointer;
  position: relative;
  user-select: none;

  .mmq-switch-status {
    width: 100%;
    height: 100%;
    border-radius: 12px;
    vertical-align: bottom;
    display: flex;
    align-items: center;
  }

  .mmq-switch-open {
    .mmq-switch-text {
      padding-right: 24px;
      padding-left: 6px;
      font-size: 14px;
      color: #fff;
    }

    &::before {
      top: 4px;
      left: calc(100% - 22px);
      position: absolute;
      content: '';
      width: 16px;
      height: 16px;
      border-radius: 8px;
      background-color: #fff;
      transition: all 0.3s;
    }
  }

  .mmq-switch-close {
    .mmq-switch-text {
      padding-right: 6px;
      padding-left: 24px;
      font-size: 14px;
      color: #fff;
    }

    &::before {
      position: absolute;
      top: 4px;
      left: 4px;
      content: '';
      width: 16px;
      height: 16px;
      border-radius: 8px;
      background-color: #fff;
      transition: all 0.3s;
    }
  }
}

.mmq-switch-text-selected {
  color: #40a9ff;
}

.mmq-switch-disabled {
  cursor: not-allowed;

  .mmq-switch-open {
    background-color: #d9d9d9;
    border: 1px solid #d9d9d9;

    &::before {
      margin-top: 3px;
      margin-left: calc(100% - 22px);
      position: absolute;
      content: '';
      width: 16px;
      height: 16px;
      border-radius: 8px;
      background-color: #fff;
    }
  }
}
</style>
