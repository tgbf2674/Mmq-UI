<template>
  <div ref="colRef" class="mmq-grid-col" :style="{width: widthRef}">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {computed, onMounted, ref} from 'vue';

export default {
  name: 'MqGridCol',
  props:{
    span: {
      type: Number,
      required: true
    },
    offset: {
      type: Number,
      default: 0
    }
  },
  setup({span,offset}:{span: number;offset: number}){
    const colRef = ref()
    const widthRef = computed(()=>{
      return Number(span / 24 *100).toFixed(2)+ '%'
    })
    onMounted(()=>{
      if(offset){
        const width = colRef.value.offsetWidth
        colRef.value.style.transform = `translateX(${Number(offset / span * width)}px)`
      }
    })
    return {widthRef,colRef}
  }
}
</script>

<style lang="scss" scoped>
.mmq-grid-col{
  box-sizing: border-box;
}
</style>
