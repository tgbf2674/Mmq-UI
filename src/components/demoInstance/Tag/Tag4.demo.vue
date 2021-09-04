<demo>
不同尺寸
</demo>
<template>
  <Tag canClose>默认标签</Tag>
  <Tag size="medium" canClose>中等标签</Tag>
  <Tag size="small" canClose>小型标签</Tag>
  <Tag size="mini" canClose>超小标签</Tag>
</template>
<script lang="ts">
import Tag from '../../../lib/Tag.vue';

export default {
  name: 'Tag1.demo',
  components: {Tag},

};
</script>

<style scoped>

</style>
