<template>
  <div ref="gutterRef" class="mmq-grid-wrapper" :class="{gutter: gutter}">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {onMounted, ref, watchEffect} from 'vue';

export default {
name: "MqGrid",
  props: {
  gutter: {
    type: Number,
    default: 0
  }
  },
  setup(props:{gutter: number}){
    const gutterRef = ref()
    onMounted(()=>{
      watchEffect(()=>{
        if(props.gutter){
          Array.from(gutterRef.value.children).forEach((item: any)=>{
            if(item.nextSibling!.className === 'mmq-grid-col' || (item.nextSibling && !item.previousElementSibling)){
              item.style.paddingRight = props.gutter + 'px'
            }
          })
        }
      })
    })
    return {gutterRef}
  }
}
</script>

<style lang="scss" scoped>
.mmq-grid-wrapper{
  display: flex;
}
</style>
