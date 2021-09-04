<demo>
不同模式
</demo>
<template>
  <div>
    <span>Dark</span>
    <Tag v-for="item in items" :key="item.label" :type="item.type" effect="dark">{{ item.label }}</Tag>
  </div>
  <div>
    <span>Plain</span>
    <Tag v-for="item in items" :key="item.label" :type="item.type" effect="plain">{{ item.label }}</Tag>
  </div>
</template>
<script lang="ts">
import Tag from '../../../lib/Tag.vue';
import {reactive} from 'vue';

export default {
  name: 'Tag1.demo',
  components: {Tag},
  setup() {
    const items = reactive([
      {type: '', label: '标签一'},
      {type: 'success', label: '标签二'},
      {type: 'info', label: '标签三'},
      {type: 'danger', label: '标签四'},
      {type: 'warning', label: '标签五'}]);
    return {items};
  }
};
</script>

<style scoped>

</style>
