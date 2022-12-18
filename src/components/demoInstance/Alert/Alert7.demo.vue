<demo>
带有辅助性描述和图标
</demo>
<template>
  <Alert
      title="成功提示的文案"
      type="success"
      description="文字说明文字说明文字说明文字说明文字说明文字说明"
      show-icon
  >
  </Alert>
  <Alert
      title="消息提示的文案"
      type="info"
      description="文字说明文字说明文字说明文字说明文字说明文字说明"
      show-icon
  >
  </Alert>
  <Alert
      title="警告提示的文案"
      type="warning"
      description="文字说明文字说明文字说明文字说明文字说明文字说明"
      show-icon
  >
  </Alert>
  <Alert
      title="错误提示的文案"
      type="error"
      description="文字说明文字说明文字说明文字说明文字说明文字说明"
      show-icon
  >
  </Alert>
</template>

<script lang="ts">
import Alert from '../../../lib/Alert.vue';

export default {
  name: 'Alert1.demo',
  components: {
    Alert
  },
};
</script>

<style scoped>

</style>
