<demo>
常规用法
</demo>
<template>
  <Radio v-model="selectedValue" :options="options"></Radio>
</template>

<script lang="ts">
import Radio from '../../../lib/Radio.vue'
import {ref} from 'vue';
export default {
name: "Radio1.demo",
  components: {Radio},
  setup(){
  const options = ref([
    {label: '苹果',value: 'Apple'},
    {label: '梨',value: 'Pear'},
    {label: '西瓜',value: 'watermelon'},
  ])
  const selectedValue = ref('watermelon')
    return {selectedValue,options}
  }
}
</script>

<style scoped>

</style>
