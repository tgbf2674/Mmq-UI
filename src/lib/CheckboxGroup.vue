<template>
  <div class="gulu-checkboxGroup">
    <slot />
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, provide} from 'vue';

export default defineComponent ({
  name: 'CheckoutGroup',
  props: {
    value: {
      type: Array,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    provide(
      'CheckboxGroupContext', props.value
    )
  }
})
</script>

<style scoped>

</style>
