<template>
  <div class="mq-pagination" :style="{'justify-content': computedPosition}">
    <a @click="changePage(false)" href="javascript:;" :class="{'disabled': currentPage === 1}">上一页</a>
    <span v-if="currentPage>3">...</span>
    <a @click="changePage(item)" href="javascript:;" v-for="item in list" :key="item" :class="{active: currentPage === item}">{{item}}</a>
    <span v-if="currentPage < pages - 2">...</span>
    <a @click="changePage(true)" href="javascript:;" :class="{disabled: currentPage === pages}">下一页</a>
  </div>
</template>

<script>
import {computed, defineComponent, ref} from 'vue'

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
    },
    position: {
      type: String,
      default: 'center'
    }
  },
  setup(props, context) {
    const computedPosition = computed(() => {
      if (props.position === 'left') return 'flex-start'
      else if (props.position === 'right') return 'flex-end'
      else if (props.position === 'center') return 'center'
    })
    const pages = computed(() => Math.ceil(props.total / props.pageSize))
    const currentPage = ref(context.attrs.page || 1)
    const list = computed(() => {
      const res = []
      if (pages.value <= 5) {
        for (let i = 1;i <= pages.value; i++) {
          res.push(i)
        }
      } else {
        if (currentPage.value <= 2) {
          for (let i = 1;i<=5;i++) res.push(i)
        } else if (currentPage.value >= pages.value - 1) {
          for (let i = pages.value - 4; i <= currentPage.value + 2; i++) {
            res.push(i)
          }
        } else {
          for (let i = currentPage.value - 2; i <= currentPage.value + 2; i++) {
            res.push(i)
          }
        }
      }
      return res
    })
    const changePage = (type) => {
      if (type === false) {
        if (currentPage.value === 1)return
        if (currentPage.value > 1)currentPage.value-= 1
      } else if (type === true) {
        if (currentPage.value === pages.value) return
        if (currentPage.value < pages.value) {
          currentPage.value += 1
        }
      }else {
        currentPage.value = type
      }
      context.emit('changePage', currentPage.value)
      context.emit('update:modelValue', currentPage.value)
    }
    return {
      computedPosition, currentPage, pages, list, changePage
    }
  }
})
</script>

<style lang="scss" scoped>
.mq-pagination {
  display: flex;
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
