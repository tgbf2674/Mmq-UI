<demo>
常规用法
</demo>
<template>
  <div>
    <mmq-link href="https://4399.com" target="_blank">默认链接</mmq-link>
    <mmq-link @click="clicked" type="primary">主要链接</mmq-link>
    <mmq-link type="success">成功链接</mmq-link>
    <mmq-link type="warning">警告链接</mmq-link>
    <mmq-link type="danger">危险链接</mmq-link>
    <mmq-link type="info">信息链接</mmq-link>
  </div>
</template>

<script lang="ts">
import GuluLink from '../../../lib/GuluLink.vue'
export default {
  name: 'GuluLink1.demo',
  components:{
    'mmq-link': GuluLink
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
