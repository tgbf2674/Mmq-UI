<template>
  <div>Button 示例</div>
  <Demo :component="Button1Demo"></Demo>
  <Demo :component="Button2Demo"></Demo>
  <Demo :component="Button3Demo"></Demo>
  <Demo :component="Button4Demo"></Demo>
  <Demo :component="Button5Demo"></Demo>
  <Demo :component="Button6Demo"></Demo>
  <Demo :component="Button7Demo"></Demo>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue'
import Button1Demo from '../demoInstance/Button/Button1.demo.vue'
import Button2Demo from '../demoInstance/Button/Button2.demo.vue'
import Button3Demo from '../demoInstance/Button/Button3.demo.vue'
import Button4Demo from '../demoInstance/Button/Button4.demo.vue'
import Button5Demo from '../demoInstance/Button/Button5.demo.vue'
import Button6Demo from '../demoInstance/Button/Button6.demo.vue'
import Button7Demo from '../demoInstance/Button/Button7.demo.vue'
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
      onClick,Button1Demo,Button2Demo,Button3Demo,Button4Demo,Button5Demo,Button6Demo,Button7Demo
    }
  }
}
</script>

<style scoped>

</style>
