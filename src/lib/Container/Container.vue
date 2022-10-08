<template>
  <section class="mmq-container" :class="{'is-vertical': isVertical}">
    <slot></slot>
  </section>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
export default defineComponent({
  name: 'MqContainer',
  props: {
    direction: {
      type: String,
      default: 'vertical'
    }
  },
  setup(props,{slots}){
    const isVertical = computed(()=>{
      if(props.direction=== 'vertical'){
        return true
      }else if(props.direction === 'horizontal'){
        return false
      }
    })
    return {
      isVertical
    }
  }
})
</script>

<style lang="scss" scoped>
  .mmq-container{
    flex-grow: 1;
    display: flex;
    box-sizing: border-box;
    min-width: 0;
    flex-direction: row;
  }
  .is-vertical{
    flex-direction: column;
  }
</style>
