<template>
  <div class="gulu-collapse-item" :class="{isActive: isActive}">
    <div class="gulu-collapse-item-header" @click="handleHeaderClick">
      <slot name="header"></slot>
      <Icon name="icon-menuright"></Icon>
    </div>
    <div v-show="isActive" class="gulu-collapse-item-body">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Icon from './Icon.vue';
import {computed, defineComponent, inject} from 'vue';
import {emitter} from './Collapse.vue'
export default defineComponent({
  name: 'CollapseItem',
  components: {Icon},
  props:{
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      required: true
    }
  },
  setup(props,context){
    const isActive = computed(()=>{
      return inject('collapse').activeName.findIndex(item =>item ===props.name) >=0
    })

    const handleHeaderClick=()=>{
      emitter.emit('itemClick,props.name')
    }
    return {
      isActive,handleHeaderClick
    }
  }
})
</script>

<style lang="scss" scoped>
@import "./src/style/theme.scss";
.gulu-collapse-item {
  .gulu-collapse-item-header {
    display: flex;
    align-items: center;
    height: 48px;
    line-height: 48px;
    background-color: #fff;
    color: #303133;
    cursor: pointer;
    border-bottom: 1px solid #ebeef5;
    font-size: 13px;
    font-weight: 500;
    transition: border-bottom-color .3s;
    outline: none;

    svg {
      margin: 0 8px 0 auto;
      transition: transform .3s;
      font-weight: 300;
    }
  }
  .gulu-collapse-item-body {
    overflow: hidden;
    box-sizing: border-box;
    border-bottom: 1px solid #ebeef5;
    padding-bottom: 25px;
    font-size: 13px;
    color: #303133;
    line-height: 2;
  }
  &.isActive {
    .o-collapse-item-header {
      border-bottom-color: transparent;
      svg {
        transform: rotate(90deg);
      }
    }
  }
}
</style>
