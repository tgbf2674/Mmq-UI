<demo>
下划线
</demo>
<template>
  <div>
    <gulu-link :underline="false">没有下划线</gulu-link>
    <gulu-link :underline="true">有下划线</gulu-link>
  </div>
</template>

<script lang="ts">
import GuluLink from '../../../lib/GuluLink.vue'
export default {
  name: 'GuluLink1.demo',
  components:{
    'gulu-link': GuluLink
  }
}
</script>

<style scoped>

</style>
