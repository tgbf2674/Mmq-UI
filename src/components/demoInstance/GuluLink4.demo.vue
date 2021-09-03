<demo>
图标
</demo>
<template>
  <div>
    <gulu-link type="danger" icon="icon-delete">删除</gulu-link>
    <gulu-link type="warning" icon="icon-user">用户</gulu-link>
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
