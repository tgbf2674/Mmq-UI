<template>
  <div class="zero-card-content" :class="`zero-card-shadow-${shadow}`">
    <header class="zero-card-header">
      <slot name="title">卡片标题</slot>
    </header>
    <div class="zero-card-body">
      <slot></slot>
      <div class="zero-card-item" v-for="(item,index) in listData" :key="index">{{ item }}</div>
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
.zero-card-content {
  border-radius: 4px;
  border: 1px solid $o-border-color;
  background-color: #fff;
  overflow: hidden;
  color: #303133;
  &.zero-card-shadow-always {
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  }
  &.zero-card-shadow-never {
    box-shadow: none;
  }
  &.zero-card-shadow-hover {
    &:hover {
      box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    }
  }
  .zero-card-header {
    padding: 18px 20px;
    border-bottom: 1px solid $o-border-color;
    box-sizing: border-box;
  }
  .zero-card-body {
    padding: 20px;
    .zero-card-item {
      margin-bottom: 16px;
      font-size: 14px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
