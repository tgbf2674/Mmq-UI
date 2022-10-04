<demo>
禁用状态
</demo>
<template>
  <checkbox v-model="checkAll" :indeterminate="isIndeterminate" label="check all" @change="handleAllChange"></checkbox>
  <CheckboxGroup v-model="checkedCities" @change="handleCheckedCitiesChange">
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
    const checkAll = ref(false)
    const isIndeterminate = ref(true)
    const checkedCities = ref(['Shanghai', 'Beijing'])
    const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']
    const handleCheckedCitiesChange = (value: string[]) => {
      const checkedCount = value.length
      checkAll.value = checkedCount === cities.length
      isIndeterminate.value = checkedCount > 0 && checkedCount < cities.length
    }
    const handleAllChange = (val: any) => {
      checkedCities.value = val ? cities : []
      isIndeterminate.value = false
    }
    return {
      handleCheckedCitiesChange, checkAll, isIndeterminate, checkedCities, handleAllChange
    }
  }
}
</script>

<style scoped>

</style>
