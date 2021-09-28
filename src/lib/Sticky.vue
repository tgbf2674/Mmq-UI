<template>
  <div class="gulu-sticky-wrapper">
    <div class="gulu-sticky" ref="stickyRef" :class="{sticky}">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, onUnmounted, ref} from 'vue';

export default defineComponent({
  name: 'Sticky',
  props: {
    distance:{
      type:Number,
      default: 0
    }
  },
  setup(props){
    const sticky = ref(false)
    const top = ref(0)
    const stickyRef = ref<HTMLDivElement>()
    const handleScroll = () => {
      if (window.scrollY > top.value - props.distance) {
        let {width, height, left} = stickyRef.value!.getBoundingClientRect()
        stickyRef.value!.style.width = width + 'px'
        stickyRef.value!.style.height = height + 'px'
        stickyRef.value!.style.top = props.distance + 'px'
        stickyRef.value!.style.left = left + 'px'
        sticky.value = true
      } else {
        sticky.value = false
      }
    }
    onMounted(() => {
      top.value = stickyRef.value!.getBoundingClientRect().top
      window.addEventListener('scroll', handleScroll)
    })
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })
    return {sticky, top, stickyRef}
  }
})
</script>

<style lang="scss" scoped>
.gulu-sticky-wrapper {
  width: 100%;
  .gulu-sticky {
    width: 100%;
    height: 100%;
    &.sticky {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 100;
    }
  }
}
</style>
