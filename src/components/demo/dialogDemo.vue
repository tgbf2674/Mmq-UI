<template>
<!--  <Demo :component="Dialog1Demo" />-->
<!--  <Demo :component="Dialog2Demo" />-->
  <Demo :component="Dialog3Demo" />
</template>

<script lang="ts">
import Dialog from '../../lib/Dialog.vue'
import Button from '../../lib/Button.vue';
import Demo from '../Demo.vue';
// import Dialog1Demo from '../demoInstance/Dialog/Dialog1.dmeo.vue';
// import Dialog2Demo from '../demoInstance/Dialog/Dialog2.dmeo.vue';
import Dialog3Demo from '../demoInstance/Dialog/Dialog3.demo.vue';
import {openDialog} from '../../lib/openDialog'
import {ref} from 'vue';
export default {
  name: 'dialogDemo',
  components:{
    Dialog,
    Button,
    Demo
  },
  setup(){
    const x = ref(false)
    const toggle = ()=>{
      x.value = !x.value
    }
    const f1 = () =>{
      return false
    }
    const f2 = ()=>{
    }
    const showDialog = ()=>{
      openDialog({
        title: '标题',
        content: '你好',
        ok(){
          console.log('ok')
        },
        cancel(){
          console.log('cancel')
        },
        closeOnClickOverlay: false
      })
    }
    return {
      x,toggle,f1,f2,showDialog,Dialog3Demo
    }
  }
}
</script>

<style scoped>

</style>
