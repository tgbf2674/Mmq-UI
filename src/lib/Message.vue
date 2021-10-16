<template>
  <teleport to="body">
    <div v-if="messageVisible" :style="{top:top+'%'}" class="gulu-messageWrapper" :class="messageWrapper">
      <Icon :name="iconName"/>
      <span class="gulu-message">{{ message }}</span>
      <span v-if="canClose" class="close" @click="close">╳</span>
    </div>
  </teleport>
</template>

<script lang="ts">
import {computed, defineComponent, PropType, ref} from 'vue';
import Icon from './Icon.vue'
export default defineComponent({
  name: 'Message',
  components: {Icon},
  props:{
    close: {
      type: Function,
    },
    message: {
      type: String,
      required: true
    },
    canClose: {
      type: Boolean,
      default: true
    },
    type: {
      type:String as PropType<MessageOptions['type']>,
      default: 'success',
      validator(value: string): boolean {
        return ['success','error','warning','info'].indexOf(value) >=0
      }
    },
    top: {
      type: Number
    },
    displayTime: {
      type: Number,
      default: 3
    }
  },
  setup({type}:any){
    const messageVisible = ref(true)
    const messageWrapper = computed(()=>{
      return 'gulu-messageWrapper-'+ type
    })
    const iconName = computed(()=>{
      return 'icon-'+ type
    })
    return {messageVisible,messageWrapper,iconName}
  },
})
</script>

<style lang="scss">
@import "./src/style/theme.scss";
@keyframes enter {
  from {top: 0}
}
.gulu-messageWrapper {
  animation: enter .3s;
  z-index: 9999;
  min-width: 380px;
  border-color: #EBEEF5;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  background-color: #edf2fc;
  padding: 15px 15px 15px 20px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  &.gulu-messageWrapper-error {
    border-color: $gulu-type-error-disabled;
    border-style: solid;
    border-width: 1px;
    background: $gulu-type-error-light;
    .gulu-message {
      color: $gulu-type-error;
    }
    svg {
      fill: $gulu-type-error;
    }
    .close {
      color: $gulu-type-error;
    }
  }
  &.gulu-messageWrapper-success {
    border-color: $gulu-type-success-disabled;
    border-style: solid;
    border-width: 1px;
    background: $gulu-type-success-light;
    .gulu-message {
      color: $gulu-type-success;
    }
    svg {
      fill: $gulu-type-success;
    }
    .close {
      color: $gulu-type-success;
    }
  }
  &.gulu-messageWrapper-warning {
    border-color: $gulu-type-warning-disabled;
    border-style: solid;
    border-width: 1px;
    background: $gulu-type-warning-light;
    .gulu-message {
      color: $gulu-type-warning;
    }
    svg {
      fill: $gulu-type-warning;
    }
    .close {
      color: $gulu-type-warning;
    }
  }
  svg {
    fill: #999999;
    font-size: 18px;
    margin-right: 10px;
  }
  .gulu-message {
    flex-grow: 1;
    font-size: 14px;
    line-height: 1.5;
    color: #909399;
  }
  .close {
    color: #C0C4CC;
    cursor: pointer;
    &:hover {
      color: #666666;
    }
  }
}
</style>
