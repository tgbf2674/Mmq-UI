<demo>
带有Icon
</demo>
<template>
  <Alert title="成功提示的文案" showIcon type="success"></Alert>
  <Alert title="消息提示的文案" showIcon type="info"> </Alert>
  <Alert title="警告提示的文案" showIcon type="warning"> </Alert>
  <Alert title="错误提示的文案" showIcon type="error"> </Alert>
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
