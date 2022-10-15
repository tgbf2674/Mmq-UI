<template>
  <div :class="['mmq-switch-wrapper']" @click="changeSwitchStatus">
    <div :class="['mmq-switch-status', switchStatusClass]">
      <span class="mmq-switch-text">{{ switchStatusText }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'MqSwitch',
  props: {
    checked: {
      required: true,
      default: false,
      type: Boolean
    },
    defaultChecked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    openText: {
      type: String,
      default: ''
    },
    closeText: {
      type: String,
      default: ''
    }
  },
  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped>

</style>
