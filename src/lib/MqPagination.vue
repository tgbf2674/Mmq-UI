<template>
  <div class="mq-pagination">
    <a href="javascript:;">上一页</a>
    <span>...</span>
    <a href="javascript:;"></a>
    <span>...</span>
    <a href="javascript:;">下一页</a>
  </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'MqPagination',
  props: {
    total: {
      type: Number,
      default: 80
    },
    pageSize: {
      type: Number,
      default: 10
    }
  },
  setup(props, context) {
  }
})
</script>

<style lang="scss" scoped>
.mq-pagination {
  display: flex;
  justify-content: center;
  padding: 30px;
  > a {
    display: inline-block;
    padding: 5px 10px;
    text-decoration: none;
    color: #666;
    border: 1px solid #e4e4e4;
    border-radius: 4px;
    margin-right: 10px;
  &:hover {
    color: #27ba9b;
  }
  &.active {
    background: #27ba9b;
    color: #fff;
    border-color: #27ba9b;
  }
  &.disabled {
    cursor: not-allowed;
    opacity: 0.4;
    &:hover {
      color: #333;
    }
  }
}
  >span {
    margin-right: 10px;
  }
}
</style>
