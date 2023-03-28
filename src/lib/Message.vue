<template>
  <teleport to="body">
    <div :style="{top:top+'%'}" class="mmq-messageWrapper" :class="`mmq-messageWrapper-${type}`">
      <MqIcon fontSize="24">
        <component :is="type"></component>
      </MqIcon>
      <span class="mmq-message">{{ message }}</span>
      <span v-if="canClose" class="close" @click="close">╳</span>
    </div>
  </teleport>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import MqIcon from './MqIcon.vue';
export default defineComponent({
  name: 'MqMessage',
  components: {MqIcon},
  props: {
    close: {
      type: Function
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
      type: String as PropType<MessageOptions['type']>,
      default: 'SuccessFilled',
      validator(value: string): boolean {
        return ['SuccessFilled', 'CircleCloseFilled', 'WarningFilled', 'InfoFilled'].indexOf(value) >= 0;
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
  setup(props) {
    const messageDom = document.querySelector('.mmq-messageWrapper');
    if (messageDom) {
      messageDom.remove();
    }
  }
});
</script>

<style lang="scss">
@import "./src/style/theme.scss";

@keyframes enter {
  from {
    top: 0
  }
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

  &.mmq-messageWrapper-CircleCloseFilled {
    border-color: $mmq-type-error-disabled;
    border-style: solid;
    border-width: 1px;
    background: $mmq-type-error-light;

    .mmq-message {
      color: $mmq-type-error;
    }

    .mmq-icon-wrapper {
      color: $mmq-type-error;
    }

    .close {
      color: $mmq-type-error;
    }
  }

  &.mmq-messageWrapper-SuccessFilled {
    border-color: $mmq-type-success-disabled;
    border-style: solid;
    border-width: 1px;
    background: $mmq-type-success-light;

    .mmq-message {
      color: $mmq-type-success;
    }

    .mmq-icon-wrapper {
      color: $mmq-type-success;
    }

    .close {
      color: $mmq-type-success;
    }
  }

  &.mmq-messageWrapper-WarningFilled {
    border-color: $mmq-type-warning-disabled;
    border-style: solid;
    border-width: 1px;
    background: $mmq-type-warning-light;

    .mmq-message {
      color: $mmq-type-warning;
    }

    .mmq-icon-wrapper {
      color: $mmq-type-warning;
    }

    .close {
      color: $mmq-type-warning;
    }
  }
  &.mmq-messageWrapper-InfoFilled {
    border-color: $mmq-type-info-mmq-disabled;
    border-style: solid;
    border-width: 1px;
    background: $mmq-type-info-mmq-light;

    .mmq-message {
      color: $mmq-type-info;
    }

    .mmq-icon-wrapper {
      color: $mmq-type-info;
    }

    .close {
      color: $mmq-type-info;
    }
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
