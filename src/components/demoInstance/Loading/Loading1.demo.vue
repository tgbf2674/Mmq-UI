<demo>
组件调用方式
</demo>
<template>
  <Loading :loading="loading" text="正在加载..."></Loading>
  <Button @click="openLoading">打开Loading</Button>
</template>

<script>
import Loading from '../../../lib/Loading.vue'
import Button from '../../../lib/Button.vue'
import {ref} from 'vue'
export default {
  name: 'Loading1.demo',
  components: {Button,Loading},
  setup(){
    const loading = ref(false)
    const openLoading = ()=>{
      loading.value = true
      setTimeout(()=>{
        loading.value = false
      },15000)
    }
    return {
      openLoading,loading
    }
  }
}
</script>

<style scoped>

</style>
