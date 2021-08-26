<template>
  <div>Button 示例</div>
  <Demo :component="Button1Demo"></Demo>
  <Demo :component="Button2Demo"></Demo>
  <Demo :component="Button3Demo"></Demo>
  <Demo :component="Button4Demo"></Demo>
  <Demo :component="Button5Demo"></Demo>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue'
import Button1Demo from '../demoInstance/Button1.demo.vue'
import Button2Demo from '../demoInstance/Button2.demo.vue'
import Button3Demo from '../demoInstance/Button3.demo.vue'
import Button4Demo from '../demoInstance/Button4.demo.vue'
import Button5Demo from '../demoInstance/Button5.demo.vue'
import Demo from '../Demo.vue'
export default {
  name: 'buttonDemo',
  components:{
    Button,Demo
  },
  setup(){
    const onClick = ()=>{
    }
    return {
      onClick,Button1Demo,Button2Demo,Button3Demo,Button4Demo,Button5Demo
    }
  }
}
</script>

<style scoped>

</style>
