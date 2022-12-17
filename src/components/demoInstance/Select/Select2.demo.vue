<demo>
自定义模板
</demo>
<template>
  <h5>你可以自定义如何来渲染每一个选项。将自定义的 HTML 模板插入 MqSelectOption 的 slot 中即可。</h5>
  <div style="display: flex;align-items: center">
    <MqSelect @onChange="handleChange" v-model="currentFoot" size="large">
      <MqSelectOption v-for="item in options" :key="item.value" :value="item.value" :label="item.label"
                      :disabled="item.disabled">
        <span style="float: left">{{ item.label }}</span>
        <span
          style="
          float: right;
          font-size: 13px;
        "
        >{{ item.value }}</span
        >
      </MqSelectOption>
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
      }
    ];
    const currentFoot = ref('' || []);
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
