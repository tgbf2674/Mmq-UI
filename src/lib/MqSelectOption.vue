<template>
  <div :class="['mq-options-item']" @click.stop="handleOptionsClick">
    <slot>
      <span>{{ label }}</span>
    </slot>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import { emitter } from './MqSelect.vue'
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
  setup (props) {
    const handleOptionsClick = () => {
      emitter.emit('onChange', { value: props.value, label: props.label } || '')
    }
    return {
      handleOptionsClick
    }
  }
})
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
</style>
