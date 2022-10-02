<demo>
禁用状态
</demo>
<template>
  <CheckboxGroup :value="value" @change="checkboxChange">
    <checkbox label="haha"></checkbox>
    <checkbox label="xixi"></checkbox>
    <checkbox label="heihei"></checkbox>
    <checkbox label="wuhu"></checkbox>
  </CheckboxGroup>
</template>

<script lang="ts">
import checkbox from '../../../lib/Checkbox.vue';
import CheckboxGroup from '../../../lib/CheckboxGroup.vue';
import {ref} from 'vue';
export default {
  name: 'Checkbox1.demo',
  components: {checkbox, CheckboxGroup},
  setup() {
    const value = ref(['haha', 'xixi'])
    const checkboxChange = (val) => {
      console.log(val)
    }
    return {
      value, checkboxChange
    }
  }
}
</script>

<style scoped>

</style>
