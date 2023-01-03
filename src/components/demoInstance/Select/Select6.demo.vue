<demo>
筛选选项
</demo>
<template>
  <h5>可以利用筛选功能快速查找选项

    为 mq-select 添加 filterable 属性即可启用筛选功能。 默认情况下，Select 会找出所有 label 属性包含输入值的选项。</h5>
  <div style="display: flex;align-items: center">
    <MqSelect filterable @onChange="handleChange" v-model="currentFoot" size="large">
      <MqSelectOption v-for="item in options" :key="item.value" :value="item.value" :label="item.label"
                      :disabled="item.disabled"></MqSelectOption>
    </MqSelect>
    {{ currentFoot }}
  </div>
</template>

<script lang="ts">
import MqSelect from '../../../lib/MqSelect.vue';
import MqSelectOption from '../../../lib/MqSelectOption.vue';
import {ref} from 'vue';

export default {
  name: 'Select1.demo',
  components: {MqSelect, MqSelectOption},
  setup() {
    const options = [
      {
        value: '选项1',
        label: '黄金糕',
      },
      {
        value: '选项2',
        label: '双皮奶',
      },

      {
        value: '选项3',
        label: '蚵仔煎',
        disabled: true,
      },
      {
        value: '选项4',
        label: '龙须面',
      },
      {
        value: '选项5',
        label: '北京烤鸭',
        disabled: true,
      },
      {
        value: '选项6',
        label: '杂酱面',
      }
    ];
    const currentFoot = ref('' || []);
    const handleChange = (e: InputEvent) => {
    };
    return {
      options, currentFoot, handleChange
    };
  }
};
</script>

<style scoped>

</style>
