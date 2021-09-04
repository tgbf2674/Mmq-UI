<template>
  <span v-if="disableTransitions" :class="classes" :style="{background: color}" @click="handleClick">
    <slot></slot>
    <span v-if="canClose" class="close" @click="handleClose">&times;
    </span>
  </span>
  <transition v-else name="gulu-zoom-in-center">
    <span v-if="disableTransitions" :class="classes" :style="{background: color}" @click="handleClick">
    <slot></slot>
    <span v-if="canClose" class="close" @click="handleClose">&times;</span>
  </span>
  </transition>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from 'vue';

export default defineComponent({
  name: 'Tag',
  props: {
    canClose: {
      type: Boolean,
    },
    type: {
      type: String as PropType<TagType>,
      default: ''
    },
    hit: Boolean,
    disableTransitions: {
      type: Boolean,
      default: 'true'
    },
    color: {
      type: String,
      default: ''
    },
    size: {
      type: String as PropType<ComponentSize>,
      validator: (val: string): boolean => {
        return ['', 'large', 'medium', 'small', 'mini'].includes(val);
      }
    },
    effect: {
      type: String,
      default: 'light',
      validator: (val: string): boolean => {
        return ['dark', 'light', 'plain'].indexOf(val) !== -1;
      }
    }
  },
  emits: ['close', 'click'],
  setup(props, context) {
    const tagSize = computed(() => {
      return props.size;
    });
    const classes = computed(() => {
      const {type, hit, effect} = props;
      return [
        'gulu-tag',
        type ? `gulu-tag-${type}` : '',
        tagSize.value ? `gulu-tag-${tagSize.value}` : '',
        effect ? `gulu-tag-${effect}` : '',
        hit && 'is-hit'
      ];
    });
    const handleClose = (event:any) => {
      event.stopPropagation();
      context.emit('close', event);
    };
    const handleClick = (event:any) => {
      context.emit('click', event);
    };
    return {
      tagSize, classes, handleClose, handleClick
    };
  }
});
</script>

<style lang="scss" scoped>
.gulu-tag {
  background-color: mix(#ecf5ff, #fff);
  border: 1px solid #d9ecff;
  color: #409eff;
  display: inline-block;
  height: 32px;
  padding: 0 10px;
  line-height: 30px;
  font-size: 12px;
  border-radius: 4px;
  box-sizing: border-box;
  white-space: nowrap;
  margin-left: 10px;
}

.close {
  border-radius: 50%;
  text-align: center;
  position: relative;
  cursor: pointer;
  font-size: 16px;
  height: 16px;
  width: 16px;
  line-height: 16px;
  vertical-align: middle;
  top: -1px;
  right: -5px;
  display: inline-block;
  &:before{
    display: block;
  }
  &:hover {
    color: #fff;
    background-color: #409eff;
  }
}

.is-hit {
  border-color: #d9ecff;
}

.gulu-tag-success {
  background-color: mix(#f0f9eb, #fff);
  border-color: mix(#dcdfe6, #fff);
  color: #67c23a;
  .close {
    color: #67c23a;

    &:hover {
      color: #fff;
      background-color: #67c23a;
    }
  }
}

.gulu-tag-info {
  background-color: mix(#f4f4f5, #fff);
  border-color: mix(#dcdfe6, #fff);
  color: #909399;
  .close {
    color: #909399;

    &:hover {
      color: #fff;
      background-color: #909399;
    }
  }
}

.gulu-tag-warning {
  background-color: mix(#fdf6ec, #fff);
  border-color: mix(#dcdfe6, #fff);
  color: #e6a23c;
  .close {
    color: #e6a23c;

    &:hover {
      color: #fff;
      background-color: #e6a23c;
    }
  }
}

.gulu-tag-danger {
  background-color: mix(#fef0f0, #fff);
  border-color: mix(#dcdfe6, #fff);
  color: #f56c6c;
  .close {
    color: #f56c6c;

    &:hover {
      color: #fff;
      background-color: #f56c6c;
    }
  }
}

.gulu-tag-medium {
  height: 28px;
  line-height: 26px;

  &.close {
    transform: scale(0.8);
  }
}

.gulu-tag-small {
  height: 24px;
  line-height: 22px;

  &.close {
    transform: scale(0.8);
  }
}

.gulu-tag-mini {
  height: 20px;
  line-height: 18px;

  &.close {
    transform: scale(0.8);
  }
}

.gulu-tag-dark{
  color: #fff;
  &.gulu-tag{
    background: #409eff;
  }
  &.gulu-tag-success{
    background: #67c23a;
  }
  &.gulu-tag-info{
    background: #909399;
  }
  &.gulu-tag-danger{
    background: #f56c6c;
  }
  &.gulu-tag-warning{
    background: #e6a23c;
  }
}


.gulu-tag-plain{
  background: #fff;
}

</style>
