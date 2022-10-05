<demo>
可选项目数量的限制
</demo>
<template>
  <CheckboxGroup v-model="checkedCities" :min="1" :max="2">
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
    const checkedCities = ref(['Shanghai', 'Beijing'])
    const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']
    return {
      checkedCities, cities
    }
  }
}
</script>

<style scoped>

</style>
