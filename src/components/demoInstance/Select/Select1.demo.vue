<demo>
基本使用
</demo>
<template>
  <h5>适用广泛的基础单选 v-model 的值为当前被选中的 mq-option 的 value 属性值</h5>
  <div style="display: flex;align-items: center">
    <MqSelect @onChange="handleChange" v-model="currentFoot" size="large">
      <MqSelectOption v-for="item in options" :key="item.value" :value="item.value" :label="item.label"
                      :disabled="item.disabled"></MqSelectOption>
    </MqSelect>
    <MqSelect @onChange="handleChange" v-model="currentFoot" size="normal">
      <MqSelectOption v-for="item in options" :key="item.value" :value="item.value" :label="item.label"
                      :disabled="item.disabled"></MqSelectOption>
    </MqSelect>
    <MqSelect @onChange="handleChange" v-model="currentFoot" size="small">
      <MqSelectOption v-for="item in options" :key="item.value" :value="item.value" :label="item.label"
                      :disabled="item.disabled"></MqSelectOption>
    </MqSelect>
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
      },
      {
        value: '选项7',
        label: '123',
      },
      {
        value: '选项8',
        label: '杂酱321面',
      }
    ];
    const currentFoot = ref('');
    const handleChange = (e: InputEvent) => {
      console.log(e);
    };
    return {
      options, currentFoot, handleChange
    };
  }
};
</script>

<style scoped>

</style>
