<demo>
函数调用方式
</demo>
<template>
  <Button @click="open">打开Loading</Button>
</template>

<script lang="ts">
import Button from '../../../lib/Button.vue'
import {openLoading} from '../../../lib/openLoading'
import {ref} from 'vue';
export default {
  name: 'Loading2.demo',
  components: {Button},
  setup(){
    const loadingInstance = ref()
    const open = ()=>{
      loadingInstance.value = openLoading({text: '加载中',background: 'rgba(0,0,0,0.8)'})
      setTimeout(()=>{
        loadingInstance.value.$close()
      },1500)
    }
    return {
      open
    }
  }
}
</script>

<style scoped>

</style>
