<demo>
常规使用
</demo>
<template>
  <div>
    <Button @click="toggle">打开对话框</Button>
    <Dialog v-model:visible="open" :closeOnClickOverlay=true :ok="okCallback" :cancel="f2">
      <template v-slot:content>
        <strong>hi</strong>
        <div>hi2</div>
      </template>
      <template v-slot:title>
        <strong>加粗的标题</strong>
      </template>
    </Dialog>
  </div>
</template>

<script lang="ts">
import Dialog from '../../../lib/Dialog.vue';
import Button from '../../../lib/Button.vue';
import {
  ref,defineComponent
} from 'vue';
export default defineComponent({
  components: {
    Dialog,
    Button
  },
  setup() {
    const open = ref(false)
    const toggle = ()=>{
      open.value = !open.value
    }
    const okCallback = ()=>{
      return new Promise((resolve)=>{
        setTimeout(()=>{
          resolve(true)
        },1000)
      })
    }
    const f2 = ()=>{
      window.alert('关闭提醒')
    }
    return { open, toggle, okCallback, f2 }
  }
});
</script>
