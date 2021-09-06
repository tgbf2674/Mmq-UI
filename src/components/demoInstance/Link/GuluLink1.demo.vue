<demo>
常规用法
</demo>
<template>
  <div>
    <gulu-link href="https://4399.com" target="_blank">默认链接</gulu-link>
    <gulu-link @click="clicked" type="primary">主要链接</gulu-link>
    <gulu-link type="success">成功链接</gulu-link>
    <gulu-link type="warning">警告链接</gulu-link>
    <gulu-link type="danger">危险链接</gulu-link>
    <gulu-link type="info">信息链接</gulu-link>
  </div>
</template>

<script lang="ts">
import GuluLink from '../../../lib/GuluLink.vue'
export default {
  name: 'GuluLink1.demo',
  components:{
    'gulu-link': GuluLink
  },
  setup(){
    const clicked = (event:any)=>{
      console.log(event.target.innerText)
    }
    return {
      clicked
    }
  }
}
</script>

<style scoped>

</style>
