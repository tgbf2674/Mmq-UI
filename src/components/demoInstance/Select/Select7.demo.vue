<demo>
筛选选项
</demo>
<template>
  <h5>可以利用筛选功能快速查找选项

    为 mq-select 添加 filterable 属性即可启用筛选功能。 默认情况下，Select 会找出所有 label 属性包含输入值的选项。</h5>
  <div style="display: flex;align-items: center">
    <MqSelect
      v-model="currentSearchValue"
      :loading="loading"
      filterable
      remote
      :remote-method="remoteMethod"
      :remote-data-list="options2"
      @on-change="handleChange"
    >
      <MqSelectOption
        v-for="item in options2"
        :key="item.value"
        :value="item.value"
        :label="item.label"
      ></MqSelectOption>
    </MqSelect>
  </div>
</template>

<script lang="ts">
import MqSelect from '../../../lib/MqSelect.vue';
import MqSelectOption from '../../../lib/MqSelectOption.vue';
import {onMounted, ref} from 'vue';

export default {
  name: 'Select1.demo',
  components: {MqSelect, MqSelectOption},
  setup() {
    const loading = ref(false)
    const states = ref([
      "Alabama",
      "Alaska",
      "Arizona",
      "Arkansas",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware",
      "Florida",
      "Georgia",
      "Hawaii",
      "Idaho",
      "Illinois",
      "Indiana",
      "Iowa",
      "Kansas",
      "Kentucky",
      "Louisiana",
      "Maine",
      "Maryland",
      "Massachusetts",
      "Michigan",
      "Minnesota",
      "Mississippi",
      "Missouri",
      "Montana",
      "Nebraska",
      "Nevada",
      "New Hampshire",
      "New Jersey",
      "New Mexico",
      "New York",
      "North Carolina",
      "North Dakota",
      "Ohio",
      "Oklahoma",
      "Oregon",
      "Pennsylvania",
      "Rhode Island",
      "South Carolina",
      "South Dakota",
      "Tennessee",
      "Texas",
      "Utah",
      "Vermont",
      "Virginia",
      "Washington",
      "West Virginia",
      "Wisconsin",
      "Wyoming",
    ])
    const options2 = ref([])
    const currentSearchValue = ref('')
    const list = ref([] as Array<any>)
    const handleChange = (val: any) => {
      console.log(val)
    }
    onMounted(() => {
      list.value = states.value.map((item: any) => {
        return { value: `value:${item}`, label: `label:${item}` }
      })
    })
    const remoteMethod = () =><
    return {
      loading, options2, currentSearchValue, handleChange
    };
  }
};
</script>

<style scoped>

</style>
