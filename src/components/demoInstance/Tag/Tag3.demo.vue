<demo>
动态编辑标签
</demo>

<template>
  <Tag :key="tag"
       v-for="tag in dynamicTags"
       canClose
       @close="closeTag">
    {{ tag }}
  </Tag>
  <span style="margin-left: 20px">
    <Button @click="isEdit = true" v-if="!isEdit">+ tag</Button>
    <Input v-if="isEdit" v-model="value" @change="enterClick" @keydown.enter="enterClick"/>
  </span>
</template>

<script lang="ts">
import Tag from '../../../lib/Tag.vue';
import Input from '../../../lib/Input.vue';
import Button from '../../../lib/Button.vue';
import {reactive, ref} from 'vue';

export default {
  name: 'Tag3.demo',
  components: {Tag, Input, Button},
  setup() {
    let dynamicTags = reactive(['标签一', '标签二', '标签三']);
    const isEdit = ref(false);
    const closeTag = (name: string) => {
      dynamicTags.splice(dynamicTags.indexOf(name), 1);
    };
    const value = ref('');
    const enterClick = (e: KeyboardEvent) => {
      dynamicTags.push(value.value);
      isEdit.value = false;
    };
    return {
      dynamicTags, closeTag, isEdit, enterClick, value
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
