<demo>
自定义关闭按钮
</demo>
<template>
  <Alert title="不可关闭的alert" :closable="false" type="success"></Alert>
  <Alert title="自定义close-text" closeText="知道了" type="info"> </Alert>
  <Alert title="设置了回调的alert" @click="hello" type="warning"> </Alert>
</template>

<script lang="ts">
import Alert from '../../../lib/Alert.vue';
export default {
  name: 'Alert1.demo',
  components: {
    Alert
  },setup(){
    const hello =()=>{
      alert('你好啊')
    }
    return{
      hello
    }
  },

}
</script>

<style scoped>

</style>
