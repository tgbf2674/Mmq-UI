<template>
  <button class="mmq-switch" :disabled="disabled" :class="{'mmq-checked': value}" @click="toggle">
    <span class="mmq-span"></span>
  </button>
</template>

<script lang="ts">

import {defineComponent} from 'vue';

export default defineComponent({
  name: 'Switch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:value'],
  setup(props:{value: boolean}, context) {
    const toggle = ()=>{
      context.emit('update:value',!(props.value))
    }
    return {toggle}
  }
})
</script>

<style lang="scss">
@use "sass:math";
$h: 22px;
$h2: $h - 4px;
.mmq-switch{
  height: $h;
  width: $h*2;
  border: none;background: #bfbfbf;
  border-radius: math.div($h2, 2);
  position: relative;
  &:disabled{
    cursor: not-allowed;
  }
}
.mmq-span{
  position: absolute;
  top: 2px;
  left: 2px;
  height: $h2;
  width: $h2;
  background:white;
  border-radius: math.div($h2, 2);
  transition: all 250ms;
}
.mmq-switch.mmq-checked{
  background: #1890ff;
}
.mmq-switch.mmq-checked > .mmq-span {
  left: calc(100% - #{$h2} - 2px);
}
.mmq-switch:focus{
  outline: none;
}
.mmq-switch:active{
  > span {width: $h2 + 4px;}
}
.mmq-switch.mmq-checked:active{
  > span {width: $h2 + 4px; margin-left: -4px;}
}
</style>
