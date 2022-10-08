<template>
  <div class="mmq-badge">
    <slot></slot>
    <div>
      <div v-show="!hidden && (content || content === 0 || isDot)"
           class="mmq-badge-content" :class="[isDot ? 'is-dot' : 'mmq-badge-content-' + type,'is-fixed']"
           v-text="content">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue';

export default defineComponent({
  name: 'Badge',
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    max: {
      type: Number,
      default: 99
    },
    isDot: {
      type: Boolean
    },
    hidden: Boolean,
    type: {
      type: String,
      default: 'primary',
      validator: (value: string) => {
        return ['primary', 'success', 'warning', 'info', 'danger'].includes(value);
      }
    }
  },
  setup(props) {
    const content = computed(() => {
      if (props.isDot) {
        return;
      }
      if (typeof props.value === 'number' && typeof props.max === 'number') {
        return props.max < props.value ? `${props.max}+` : props.value;
      }
      return props.value;
    });
    return {content};
  }
});
</script>

<style lang="scss" scoped>
.mmq-badge {
  position: relative;
  vertical-align: middle;
  display: inline-block;

  .mmq-badge-content {
    background-color: #409eff;
    border-radius: 10px;
    color: #ffffff;
    display: inline-block;
    font-size: 12px;
    height: 18px;
    line-height: 18px;
    padding: 0 6px;
    text-align: center;
    white-space: nowrap;
    border: 1px solid #ffffff;

    &.is-fixed {
      position: absolute;
      top: 0;
      right: calc(1px + 18px / 2);
      transform: translateY(-50%) translateX(100%);

      &.is-dot {
        right: 5px;
        background-color: #f56c6c;
      }
    }

    &.is-dot {
      height: 8px;
      width: 8px;
      padding: 0;
      right: 0;
      border-radius: 50%;
    }

    &.mmq-badge-content-primary {
      background-color: #409eff;
    }

    &.mmq-badge-content-success {
      background-color: #67c23a;
    }

    &.mmq-badge-content-warning {
      background-color: #e6a23c;
    }

    &.mmq-badge-content-info {
      background-color: #909399;
    }

    &.mmq-badge-content-danger {
      background-color: #f56c6c;
    }
  }
}
</style>
