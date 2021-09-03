<demo>
卡片阴影
</demo>
<template>
  <main>
    <div class="cardWrapper">
      <Card :list-data="[1,2]">
        <template #title>
          <span>总是显示</span>
        </template>
      </Card>
    </div>
    <div class="cardWrapper">
      <Card shadow="hover" :list-data="[1,2]">
        <template #title>
          <span>悬浮显示</span>
        </template>
      </Card>
    </div>
    <div class="cardWrapper">
      <Card shadow="never" :list-data="[1,2]">
        <template #title>
          <span>从不显示</span>
        </template>
      </Card>
    </div>
  </main>
</template>

<script lang="ts">
import Card from "../../../lib/Card.vue";
import {ref} from 'vue';
export default {
  components: {Card},
  setup() {
  }
};
</script>

<style lang="scss" scoped>
main {
  display: flex;
  justify-content: space-between;
  .cardWrapper {
    width: 32%;
  }
}
</style>
