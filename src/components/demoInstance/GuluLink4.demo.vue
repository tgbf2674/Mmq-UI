<demo>
图标
</demo>
<template>
  <div>
    <gulu-link icon="icon-upload">编辑</gulu-link>
    <gulu-link icon="icon-user">用户</gulu-link>
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
