<demo>
不同类型
</demo>
<template>
  <Button @click="openSuccess">成功消息</Button>
  <Button @click="openError">失败消息</Button>
  <Button @click="openWarning">提醒消息</Button>
  <Button @click="openInfo">普通消息</Button>
</template>

<script lang="ts">
import Button from "../../lib/Button.vue";
import {openMessage} from '../../lib/openMessage';
export default {
  components: {Button},
  setup() {
    const openSuccess = () => {
      openMessage({
        message: '这是一条成功提示消息',
        type: 'success',
        displayTime:100,
      });
    };
    const openError = () => {
      openMessage({
        message: '这是一条失败提示消息',
        type: 'error',
      });
    };
    const openWarning = () => {
      openMessage({
        message: '这是一条提醒消息',
        type: 'warning',
      });
    };
    const openInfo = () => {
      openMessage({
        message: '这是一条普通消息',
        type: 'info',
        canClose: false,
      });
    };
    return {openSuccess, openError,openWarning,openInfo};
  }
};
</script>
