<template>
  <div :class="['mq-pagination', background ? 'background': '']" :style="{'justify-content': computedPosition}">
    <a @click="changePage(false)" href="javascript:;" :class="{'disabled': currentPage === 1}">上一页</a>
    <a v-if="currentPage > 3" @click="changePage(1)" href="javascript:;" :class="{disabled: currentPage === 1}">1</a>
    <span v-if="currentPage>3">...</span>
    <a @click="changePage(item)" href="javascript:;" v-for="item in list" :key="item" :class="{active: currentPage === item}">{{item}}</a>
    <span v-if="currentPage < pages - 2">...</span>
    <a v-if="currentPage < pages - 2" @click="changePage(pages)" href="javascript:;" :class="{disabled: currentPage === pages}">{{ pages }}</a>
    <a @click="changePage(true)" href="javascript:;" :class="{disabled: currentPage === pages}">下一页</a>
  </div>
</template>

<script>
import {computed, defineComponent, ref} from 'vue'
import Dropdown from './Dropdown.vue'
export default defineComponent({
  name: 'MqPagination',
  components: {Dropdown},
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
    },
    background: {
      type: Boolean,
      default: false
    },
    pageSizes: {
      type: Array,
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
        } else if (currentPage.value === pages.value) {
          for (let i = pages.value-4; i<=currentPage.value;i++) res.push(i)
        } else if (currentPage.value >= pages.value - 2) {
          for (let i = currentPage.value - 2;i<=pages.value;i++)res.push(i)
        }
        else {
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
        context.emit('prevClick', currentPage.value)
      } else if (type === true) {
        if (currentPage.value === pages.value) return
        if (currentPage.value < pages.value) {
          currentPage.value += 1
        }
        context.emit('nextClick', currentPage.value)
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
    color: #000;
    margin-right: 10px;
    &:hover {
      color: #27ba9b;
    }

    &.active {
      color: #27ba9b;
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
.background > a{
  border-radius: 4px;
  border-color: #27ba9b;
  &.active {
    color: #fff;
    background: #27ba9b;
    border-color: #27ba9b;
  }
}
</style>
