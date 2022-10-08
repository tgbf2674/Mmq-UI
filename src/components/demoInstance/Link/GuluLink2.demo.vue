<demo>
禁用状态
</demo>
<template>
  <div>
    <mmq-link disabled>默认链接</mmq-link>
    <mmq-link type="primary" disabled>主要链接</mmq-link>
    <mmq-link type="success" disabled>成功链接</mmq-link>
    <mmq-link type="warning" disabled>警告链接</mmq-link>
    <mmq-link type="danger" disabled>危险链接</mmq-link>
    <mmq-link type="info" disabled>信息链接</mmq-link>
  </div>
</template>

<script lang="ts">
import GuluLink from '../../../lib/GuluLink.vue'
export default {
  name: 'GuluLink1.demo',
  components:{
    'mmq-link': GuluLink
  }
}
</script>

<style scoped>

</style>
