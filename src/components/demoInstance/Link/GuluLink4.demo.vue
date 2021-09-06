<demo>
图标
</demo>
<template>
  <div>
    <gulu-link type="danger" icon="icon-delete">删除</gulu-link>
    <gulu-link type="warning">用户<Icon name="icon-user" fill="#e6a23c"></Icon></gulu-link>
  </div>
</template>

<script lang="ts">
import GuluLink from '../../../lib/GuluLink.vue'
import Icon from '../../../lib/Icon.vue'
export default {
  name: 'GuluLink1.demo',
  components:{
    'gulu-link': GuluLink,
    Icon
  }
}
</script>

<style scoped>

</style>
