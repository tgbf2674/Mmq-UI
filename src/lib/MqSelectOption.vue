<template>
  <div :class="['mq-options-item', disabled? 'disabled-item' : '']" @click="handleOptionsClick">
    <slot>
      <span>{{ label }}</span>
    </slot>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, getCurrentInstance, inject} from 'vue';
import {emitter} from './MqSelect.vue';

export default defineComponent({
  name: 'MqSelectOption',
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const internalInstance = getCurrentInstance();
    const handleOptionsClick = () => {
      if (!props.disabled) {
        emitter.emit('onChange', {
          value: props.value,
          label: props.label,
          uid: internalInstance!.parent!.parent!.parent!.uid
        });
      }
    };
    return {
      handleOptionsClick
    };
  }
});
</script>

<style lang="scss" scoped>
.mq-options-item {
  width: 100%;
  font-size: 14px;
  padding: 0 20px;
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #606266;
  height: 34px;
  line-height: 34px;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    background: #f5f7fa;
  }
}

.disabled-item {
  color: #c0c4cc;
  cursor: not-allowed;
}

.disabled-item:hover {
  border-color: #fff;
}
</style>
