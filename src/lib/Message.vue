<template>
  <teleport to="body">
    <div v-if="messageVisible" :style="{top:top+'%'}" class="gulu-messageWrapper" :class="'gulu-messageWrapper-'+type">
      <Icon :name="'icon-'+type"/>
      <span class="gulu-message">{{ message }}</span>
      <span v-if="canClose" class="close" @click="close">╳</span>
    </div>
  </teleport>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import Icon from './Icon.vue'
export default defineComponent({
  name: 'Message',
  components: {Icon},
  props:{
    close: {
      type: Function
    },
    message: {
      type: String,
      required: true
    },
    type: {
      type:String,
      default: 'info'
    },
    canClose: {
      type: Boolean,
      default: true
    },
    top: {
      type: Number
    }
  },
  setup(){
    const messageVisible = ref(true)
    return {messageVisible,open}
  }
})
</script>

<style lang="scss" scoped>
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
    #icon-error {
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
