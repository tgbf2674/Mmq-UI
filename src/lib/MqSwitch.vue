<template>
  <div :class="['mmq-switch-wrapper', disabled ? 'mmq-switch-disabled' : '']" @click="changeSwitchStatus">
    <div :class="['mmq-switch-status', switchStatusClass]">
      <span class="mmq-switch-text">{{ switchStatusText }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted, ref, watchEffect} from 'vue';

export default defineComponent({
  name: 'MqSwitch',
  props: {
    modelValue: {
      required: true,
      default: false,
      type: Boolean
    },
    defaultChecked: {
      type: Boolean,
      default: false
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
    }
  },
  setup(props, context) {
    const checkedValue = ref(props.modelValue);
    const switchStatusClass = ref('mmq-switch-close');
    const switchStatusText = ref('');
    const changeSwitchStatus = (e: Event) => {
      if (props.disabled) return;
      checkedValue.value = !props.modelValue;
      context.emit('update:modelValue', !props.modelValue);
      context.emit('change', !props.modelValue);
      console.log(checkedValue.value)
    };
    onMounted(() => {
      if (props.modelValue || props.defaultChecked) checkedValue.value = true;
      else if (!props.modelValue || !props.defaultChecked) checkedValue.value = false;
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
.mmq-switch-wrapper {
  min-width: 44px;
  height: 24px;
  margin-right: 8px;
  cursor: pointer;
  display: inline-block;
  position: relative;
  user-select: none;

  .mmq-switch-status {
    width: 100%;
    height: 100%;
    border-radius: 12px;
    vertical-align: bottom;
  }

  .mmq-switch-open {
    background-color: #40a9ff;
    border: 1px solid #40a9ff;

    .mmq-switch-text {
      padding-right: 24px;
      padding-left: 6px;
      font-size: 14px;
      color: #fff;
    }

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

  .mmq-switch-close {
    background-color: #d9d9d9;
    border: 1px solid #d9d9d9;

    .mmq-switch-text {
      padding-right: 6px;
      padding-left: 24px;
      font-size: 14px;
      color: #fff;
    }

    &::before {
      position: absolute;
      margin: 3px 0 0 3px;
      content: '';
      width: 16px;
      height: 16px;
      border-radius: 8px;
      background-color: #fff;
    }
  }
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
