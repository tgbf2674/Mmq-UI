<template>
  <Demo :component="Dialog4Demo" />
  <Demo :component="Dialog5Demo" />
  <Demo :component="Dialog3Demo" />
</template>

<script lang="ts">
import Dialog from '../../lib/Dialog.vue'
import Button from '../../lib/Button.vue';
import Demo from '../Demo.vue';
import Dialog4Demo from '../demoInstance/Dialog/Dialog4.dmeo.vue';
import Dialog5Demo from '../demoInstance/Dialog/Dialog5.dmeo.vue';
import Dialog3Demo from '../demoInstance/Dialog/Dialog3.demo.vue';
import {openDialog} from '../../lib/openDialog'
import {onMounted, ref} from 'vue';
import addADom from '../../utils/addADom';
export default {
  name: 'dialogDemo',
  components:{
    Dialog,
    Button,
    Demo
  },
  setup(){
    onMounted(() => {
      addADom()
    });
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
      x,toggle,f1,f2,showDialog,Dialog3Demo, Dialog5Demo, Dialog4Demo
    }
  }
}
</script>

<style scoped>

</style>
