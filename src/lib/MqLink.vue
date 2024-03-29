<template>
  <a
    :class="['mmq-link',type ? `mmq-link-${type}` : '',disabled && 'is-disabled',underline && !disabled && 'is-underline']"
    :href="disabled || !href ? null : href" @click="handleClick">
    <MqIcon v-if="icon" :color="IconColor">
      <component :is="icon"></component>
    </MqIcon>
    <span v-if="$slots.default" class="mmq-link-inner">
      <slot></slot>
    </span>
    <slot v-if="$slots.icon" name="icon"></slot>
  </a>
</template>

<script lang="ts">
import {computed, defineComponent, PropType, ref, reactive} from 'vue';

export default defineComponent({
  name: 'MqLink',
  props: {
    type: {
      type: String as PropType<LinkType>,
      default: 'default',
      validator: (value: string) => {
        return ['default', 'primary', 'success', 'warning', 'info', 'danger'].includes(value);
      }
    },
    underline: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    href: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  },
  emits: ['click'],
  setup(props, {emit}) {
    const IconType = ref(props.type);
    const map:any = reactive({
      'default': '#909399',
      'primary': '#409eff',
      'success': '#67c23a',
      'warning': '#e6a23c',
      'danger': '#f56c6c',
      'info': '#909399'
    });
    const IconColor = computed(() => {
      for (let key in map) {
        if(map.hasOwnProperty(key)) {
          if (IconType.value === key) {
            return map[key];
          }
        }
      }
    });
    const handleClick = (event: Event) => {
      if (!props.disabled) {
        emit('click', event);
      }
    };
    return {
      handleClick, IconColor
    };
  }
});
</script>

<style lang="scss" scoped>
.mmq-link {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  position: relative;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  font-size: 14px;
  font-weight: 300;

  &.mmq-link-default {
    color: #909399;

    &:hover {
      color: mix(#909399, #fff, 80%);
    }

    &:after {
      border-color: #909399;
    }

    &.is-disabled {
      color: mix(#909399, #fff, 80%);
    }

    &.is-underline {
      &:hover:after {
        border-color: #909399;
      }
    }
  }

  &.mmq-link-primary {
    color: #409eff;

    &:hover {
      color: mix(#409eff, #fff, 80%);
    }

    &:after {
      border-color: #409eff;
    }

    &.is-disabled {
      color: mix(#409eff, #fff, 80%);
    }

    &.is-underline {
      &:hover:after {
        border-color: #409eff;
      }
    }
  }

  &.mmq-link-success {
    color: #67c23a;

    &:hover {
      color: mix(#67c23a, #fff, 80%);
    }

    &:after {
      border-color: #67c23a;
    }

    &.is-disabled {
      color: mix(#67c23a, #fff, 80%);
    }

    &.is-underline {
      &:hover:after {
        border-color: #67c23a;
      }
    }
  }

  &.mmq-link-warning {
    color: #e6a23c;

    &:hover {
      color: mix(#e6a23c, #fff, 80%);
    }

    &:after {
      border-color: #e6a23c;
    }

    &.is-disabled {
      color: mix(#e6a23c, #fff, 80%);
    }

    &.is-underline {
      &:hover:after {
        border-color: #e6a23c;
      }
    }
  }

  &.mmq-link-danger {
    color: #f56c6c;

    &:hover {
      color: mix(#f56c6c, #fff, 80%);
    }

    &:after {
      border-color: #f56c6c;
    }

    &.is-disabled {
      color: mix(#f56c6c, #fff, 80%);
    }

    &.is-underline {
      &:hover:after {
        border-color: #f56c6c;
      }
    }
  }

  &.mmq-link-info {
    color: #909399;

    &:hover {
      color: mix(#909399, #fff, 80%);
    }

    &:after {
      border-color: #909399;
    }

    &.is-disabled {
      color: mix(#909399, #fff, 80%);
    }

    &.is-underline {
      &:hover:after {
        border-color: #909399;
      }
    }
  }
}

.is-underline {
  &:hover:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-bottom: 1px solid #909399;
  }
}

.is-disabled {
  cursor: not-allowed;
}

</style>
