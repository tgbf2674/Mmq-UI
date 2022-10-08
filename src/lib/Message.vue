<template>
  <teleport to="body">
    <div v-if="messageVisible" :style="{top:top+'%'}" class="mmq-messageWrapper" :class="messageWrapper">
      <Icon :name="iconName"/>
      <span class="mmq-message">{{ message }}</span>
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
      return 'mmq-messageWrapper-'+ type
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
.mmq-messageWrapper {
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
  &.mmq-messageWrapper-error {
    border-color: $mmq-type-error-disabled;
    border-style: solid;
    border-width: 1px;
    background: $mmq-type-error-light;
    .mmq-message {
      color: $mmq-type-error;
    }
    svg {
      fill: $mmq-type-error;
    }
    .close {
      color: $mmq-type-error;
    }
  }
  &.mmq-messageWrapper-success {
    border-color: $mmq-type-success-disabled;
    border-style: solid;
    border-width: 1px;
    background: $mmq-type-success-light;
    .mmq-message {
      color: $mmq-type-success;
    }
    svg {
      fill: $mmq-type-success;
    }
    .close {
      color: $mmq-type-success;
    }
  }
  &.mmq-messageWrapper-warning {
    border-color: $mmq-type-warning-disabled;
    border-style: solid;
    border-width: 1px;
    background: $mmq-type-warning-light;
    .mmq-message {
      color: $mmq-type-warning;
    }
    svg {
      fill: $mmq-type-warning;
    }
    .close {
      color: $mmq-type-warning;
    }
  }
  svg {
    fill: #999999;
    font-size: 18px;
    margin-right: 10px;
  }
  .mmq-message {
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
