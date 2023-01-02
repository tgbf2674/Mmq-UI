<template>
  <form class="mmq-form">
    <slot></slot>
  </form>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';

export default defineComponent({
  name: 'MqForm',
  setup() {
    const field = ref([])
    const formError = ref({})
    return {
      field, formError
    }
  }
})
</script>

<style scoped>

</style>
