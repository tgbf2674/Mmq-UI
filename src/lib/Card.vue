<template>
  <div class="mmq-card-content" :class="`mmq-card-shadow-${shadow}`">
    <header class="mmq-card-header">
      <slot name="title">卡片标题</slot>
    </header>
    <div class="mmq-card-body">
      <div class="mmq-card-item" v-for="(item,index) in listData" :key="index">{{ item }}</div>
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
.mmq-card-content {
  border-radius: 4px;
  border: 1px solid $mmq-border-color;
  background-color: #fff;
  overflow: hidden;
  color: #303133;
  &.mmq-card-shadow-always {
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  }
  &.mmq-card-shadow-never {
    box-shadow: none;
  }
  &.mmq-card-shadow-hover {
    &:hover {
      box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    }
  }
  .mmq-card-header {
    padding: 18px 20px;
    border-bottom: 1px solid $mmq-border-color;
    box-sizing: border-box;
  }
  .mmq-card-body {
    padding: 20px;
    .mmq-card-item {
      margin-bottom: 16px;
      font-size: 14px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
