<template>
  <div class="mmq-icon-wrapper">
    <svg class="mmq-icon" :style="{ fill, 'font-size': fontSize + 'px' }" aria-hidden="true">
      <use :xlink:href="'#'+name"></use>
    </svg>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
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
      type: [Number, String],
      default: 14
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
