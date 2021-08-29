<template>
  <div class="gulu-icon-wrapper">
    <svg class="gulu-icon" :style="style" aria-hidden="true">
      <use :xlink:href="'#'+name"></use>
    </svg>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import './iconfont.js';
export default defineComponent({
  name: "icon",
  props: {
    name: {
      type: String,
      required: true,
      default: 'icon-upload'
    },
    fill: {
      type: String,
    },
    fontSize: {
      type: Number,
      default: 14
    }
  },
  computed: {
    style() {
      return {
        fill: this.fill,
        'font-size': this.fontSize + 'px'
      };
    }
  },
});
</script>

<style lang="scss">
.gulu-icon-wrapper {
  display: inline;
  font-size: 14px;
  .gulu-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    overflow: hidden;
  }
}
</style>
