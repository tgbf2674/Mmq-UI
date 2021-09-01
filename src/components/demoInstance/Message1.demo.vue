<demo>
常规用法
</demo>
<template>
  <Button @click="open">打开Message</Button>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue'
import {openMessage} from '../../lib/openMessage'
export default {
  name: 'Message1.demo',
  components: {Button},
  setup(){
    const open = ()=>{
      openMessage({
        message: '我是通过函数调用的message',
        canClose: true,
        displayTime:3
      })
    }
    return {open}
  }
}
</script>

<style scoped>

</style>
