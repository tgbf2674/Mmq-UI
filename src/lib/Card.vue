<template>
  <div class="gulu-card-content" :class="`gulu-card-shadow-${shadow}`">
    <header class="gulu-card-header">
      <slot name="title">卡片标题</slot>
    </header>
    <div class="gulu-card-body">
      <div class="gulu-card-item" v-for="(item,index) in listData" :key="index">{{ item }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
export default defineComponent({
  name: "Card",
  props: {
    listData: Array,
    shadow: {
      type: String as PropType<CardShadow>,
      default: 'always'
    }
  },
  setup() {
    return {};
  }
});
</script>

<style lang="scss">
@import "./src/style/theme.scss";
.gulu-card-content {
  border-radius: 4px;
  border: 1px solid $gulu-border-color;
  background-color: #fff;
  overflow: hidden;
  color: #303133;
  &.gulu-card-shadow-always {
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  }
  &.gulu-card-shadow-never {
    box-shadow: none;
  }
  &.gulu-card-shadow-hover {
    &:hover {
      box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    }
  }
  .gulu-card-header {
    padding: 18px 20px;
    border-bottom: 1px solid $gulu-border-color;
    box-sizing: border-box;
  }
  .gulu-card-body {
    padding: 20px;
    .gulu-card-item {
      margin-bottom: 16px;
      font-size: 14px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
