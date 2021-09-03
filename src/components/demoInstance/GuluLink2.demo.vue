<demo>
禁用状态
</demo>
<template>
  <div>
    <gulu-link disabled>默认链接</gulu-link>
    <gulu-link type="primary" disabled>主要链接</gulu-link>
    <gulu-link type="success" disabled>成功链接</gulu-link>
    <gulu-link type="warning" disabled>警告链接</gulu-link>
    <gulu-link type="danger" disabled>危险链接</gulu-link>
    <gulu-link type="info" disabled>信息链接</gulu-link>
  </div>
</template>

<script lang="ts">
import GuluLink from '../../lib/GuluLink.vue'
export default {
  name: 'GuluLink1.demo',
  components:{
    'gulu-link': GuluLink
  }
}
</script>

<style scoped>

</style>
