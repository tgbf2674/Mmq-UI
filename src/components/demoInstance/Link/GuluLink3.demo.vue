<demo>
下划线
</demo>
<template>
  <div>
    <mmq-link :underline="false">没有下划线</mmq-link>
    <mmq-link :underline="true">有下划线</mmq-link>
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
