<template>
  <div class="mmq-collapse-item" :class="{isActive}">
    <div class="mmq-collapse-item-header" :class="{disabled}" @click="handleHeaderClick">
      <slot name="header"></slot>
      <Icon name="icon-menuright"/>
    </div>
    <Spread :visible="isActive">
      <div class="mmq-collapse-item-body">
        <slot name="body"></slot>
      </div>
    </Spread>
  </div>
</template>

<script lang="ts">
import Icon from './Icon.vue';
import {computed, defineComponent, getCurrentInstance, inject} from 'vue';
import {emitter} from './Collapse.vue'
import Spread from './Spread.vue';
export default defineComponent({
  name: "CollapseItem",
  components: {Icon, Spread},
  props: {
    name: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      required: false
    }
  },
  setup(props) {
    const internalInstance = getCurrentInstance();
    const isActive = computed(() => {
      return (inject<ICollapseProps>('collapse')!).activeName.findIndex((item:any) => item === props.name) >= 0;
    });
    const handleHeaderClick = () => {
      if (props.disabled) {
        return;
      }
      emitter.emit('itemClick', {newActiveName: props.name, uid: internalInstance!.parent!.uid});
    };
    return {isActive, handleHeaderClick};
  }
});
</script>

<style lang="scss" scoped>
@import "./src/style/theme.scss";
.mmq-collapse-item {
  .mmq-collapse-item-header {
    display: flex;
    align-items: center;
    height: 48px;
    line-height: 48px;
    justify-content: space-between;
    background-color: #fff;
    color: #303133;
    cursor: pointer;
    border-bottom: 1px solid #ebeef5;
    font-size: 13px;
    font-weight: 500;
    transition: border-bottom-color .3s;
    outline: none;
    &.disabled {
      cursor: not-allowed;
      color: rgba(0, 0, 0, .25);
      svg {
        fill: rgba(0, 0, 0, .25);
      }
    }
    svg {
      margin: 0 8px 0 auto;
      transition: transform .3s;
      font-weight: 300;
    }
  }
  .mmq-collapse-item-body {
    overflow: hidden;
    box-sizing: border-box;
    border-bottom: 1px solid #ebeef5;
    padding-bottom: 25px;
    font-size: 13px;
    color: #303133;
    line-height: 2;
  }
  &.isActive {
    .mmq-collapse-item-header {
      border-bottom-color: transparent;
      svg {
        transform: rotate(90deg);
      }
    }
  }
}
</style>
