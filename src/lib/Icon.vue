<template>
  <div class="mmq-icon-wrapper">
    <svg class="mmq-icon" :style="style" aria-hidden="true">
      <use :xlink:href="'#'+name"></use>
    </svg>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue';
import './iconfont.js';
export default defineComponent({
  name: "MqIcon",
  props: {
    name: {
      type: String,
      required: true,
      default: 'icon-upload'
    },
    fill: {
      type: String,
      default: ''
    },
    fontSize: {
      type: Number,
      default: 14
    }
  },
  setup(props){
    const style = computed(()=>{
      return {
        fill : props.fill,
        'font-size': props.fontSize + 'px'
      }
    })
    return {
      style
    }
  }
});
</script>

<style lang="scss">
.mmq-icon-wrapper {
  display: inline;
  font-size: 14px;
  .mmq-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    overflow: hidden;
  }
}
</style>
