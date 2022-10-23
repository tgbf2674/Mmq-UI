<demo>
禁用状态
</demo>
<template>
  <checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange"></checkbox>
  <CheckboxGroup v-model="checkedCities" @change="handleCheckedCitiesChange">
    <checkbox v-for="city in cities" :key="city" :label="city"></checkbox>
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

    const handleCheckAllChange = (e: InputEvent) => {
      const target = e.target as HTMLInputElement
      if (target.checked) {
        cities.forEach(item => {
          if (!checkedCities.value.includes(item)) checkedCities.value.push(item)
        })
      } else {
        while (checkedCities.value.length) {
          checkedCities.value.pop()
        }
      }
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
