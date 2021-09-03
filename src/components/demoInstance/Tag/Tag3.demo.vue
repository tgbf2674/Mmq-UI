<demo>
动态编辑标签
</demo>

<template>
  <Tag :key="tag"
       v-for="tag in dynamicTags"
       canClose
       @close="closeTag">
      {{tag}}
  </Tag>
</template>

<script lang="ts">
import Tag from '../../../lib/Tag.vue';
import {reactive} from 'vue';

export default {
  name: 'Tag3.demo',
  components: {Tag},
  setup() {
    let dynamicTags= reactive(['标签一', '标签二', '标签三'])
    const closeTag = (name:string) => {
      dynamicTags.splice(dynamicTags.indexOf(name),1)
    };
    return {
      dynamicTags,closeTag,
    };
  }
};
</script>

<style lang="scss" scoped>
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}

.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>
