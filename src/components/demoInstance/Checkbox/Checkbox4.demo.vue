<demo>
禁用状态
</demo>
<template>
  <checkbox v-model="checkAll" :indeterminate="isIndeterminate"></checkbox>
  <CheckboxGroup v-model="checkedCities" @change="handleCheckedCitiesChange">
    <checkbox v-for="city in cities" :key="city" :label="city"></checkbox>
  </CheckboxGroup>
  {{ value }}
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

    const handleCheckAllChange = (val: boolean) => {
      checkedCities.value = val ? cities : []
      isIndeterminate.value = false
    }
    const handleCheckedCitiesChange = (value: string[]) => {
      const checkedCount = value.length
      checkAll.value = checkedCount === cities.length
      isIndeterminate.value = checkedCount > 0 && cities.length > checkedCount
    }
    return {
      checkedCities, checkAll, isIndeterminate, handleCheckedCitiesChange, handleCheckAllChange, cities
    }
  }
}
</script>

<style scoped>

</style>
