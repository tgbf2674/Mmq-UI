<demo>
常规用法
</demo>
<template>
  <Card :list-data="[1,2,3,4]">
    <template #title>
      <span>我是标题</span>
    </template>
  </Card>
</template>

<script lang="ts">
import Card from "../../lib/Card.vue";
import {ref} from 'vue';
export default {
  components: {Card},
  setup() {

  }
};
</script>
