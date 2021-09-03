<demo>
可移除标签
</demo>
<template>
  <Tag v-for="tag in tags" :key="tag.name" canClose :type="tag.type">{{tag.name}}</Tag>
</template>
<script lang="ts">
import Tag from '../../../lib/Tag.vue';
import {reactive, ref} from 'vue';

export default {
  name: 'Tag1.demo',
  components: {Tag},
  setup(){
    const tags = reactive([
      { name: '标签一', type: '' },
      { name: '标签二', type: 'success' },
      { name: '标签三', type: 'info' },
      { name: '标签四', type: 'warning' },
      { name: '标签五', type: 'danger' }
    ])
    return {
      tags
    }
  }
};
</script>

<style scoped>

</style>
