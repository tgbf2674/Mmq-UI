<demo>
基础用法
</demo>
<template>
  <div>
    <Tag>标签一</Tag>
    <Tag type="success">标签二</Tag>
    <Tag type="info">标签三</Tag>
    <Tag type="warning">标签四</Tag>
    <Tag type="danger">标签五</Tag>
  </div>
</template>

<script lang="ts">
import Tag from '../../../lib/Tag.vue';

export default {
  name: 'Tag1.demo',
  components: {Tag}
};
</script>

<style scoped>

</style>
