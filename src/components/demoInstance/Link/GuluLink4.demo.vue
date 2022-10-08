<demo>
图标
</demo>
<template>
  <div>
    <mmq-link type="danger" icon="icon-delete">删除</mmq-link>
    <mmq-link type="warning">用户<Icon name="icon-user" fill="#e6a23c"></Icon></mmq-link>
  </div>
</template>

<script lang="ts">
import GuluLink from '../../../lib/GuluLink.vue'
import Icon from '../../../lib/Icon.vue'
export default {
  name: 'GuluLink1.demo',
  components:{
    'mmq-link': GuluLink,
    Icon
  }
}
</script>

<style scoped>

</style>
