<template>
  <div class="gulu-grid-col" :style="{width: widthRef}">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {computed} from 'vue';

export default {
  name: 'GridCol',
  props:{
    span: {
      type: Number,
      required: true
    }
  },
  setup({span}:any){
    const widthRef = computed(()=>{
      return Number(span/24 *100).toFixed(2)+ '%'
    })
    return {widthRef}
  }
}
</script>

<style scoped>

</style>
