<demo>
基本使用
</demo>
<template>
  <MqSelect @onChange="handleChange" v-model="currentFoot">
    <MqSelectOption v-for="item in options" :key="item.value" :value="item.value" :label="item.label" :disabled="item.disabled"></MqSelectOption>
  </MqSelect>
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
    const currentFoot = ref('');
    const handleChange = (e: InputEvent) => {
      console.log(e)
    }
    return {
      options, currentFoot, handleChange
    };
  }
};
</script>

<style scoped>

</style>
