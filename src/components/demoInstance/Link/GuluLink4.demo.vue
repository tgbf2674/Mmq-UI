<demo>
自定义图标，可去Icon组件处挑选
</demo>
<template>
  <div>
    <mmq-link type="danger" icon="Delete">删除</mmq-link>
    <mmq-link type="warning">用户<MqIcon color="#e6a23c">
      <Document />
    </MqIcon></mmq-link>
  </div>
</template>

<script lang="ts">
import GuluLink from '../../../lib/MqLink.vue'
export default {
  name: 'GuluLink1.demo',
  components:{
    'mmq-link': GuluLink
  }
}
</script>

<style scoped>

</style>
