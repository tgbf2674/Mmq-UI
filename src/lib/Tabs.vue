<template>
  <div class="gulu-tabs">
    <div class="gulu-tabs-nav" ref="container">
      <div :class="{selected: t===selected}" @click="select(t)" class="gulu-tabs-nav-item" v-for="(t,index) in titles" :ref="el=>{if(t ===selected) selectedItem=el}" :key="index">{{t}}</div>
      <div class="gulu-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="gulu-tabs-content">
      <component class="gulu-tabs-content-item" :is="current" :key="current.props.title" />
    </div>
  </div>
</template>

<script lang="ts">
import Tab from '../lib/Tab.vue'
import {computed, ref,watchEffect} from 'vue';
export default {
  name: 'Tabs',
  props: {
    selected: {
      type: String
    }
  },
  setup(props,context){
    const defaults = context.slots.default()
    const selectedItem = ref<HTMLDivElement>(null)
    const indicator = ref<HTMLDivElement>(null)
    const container = ref<HTMLDivElement>(null)
    watchEffect(()=>{
      if(selectedItem.value && indicator.value) {
        const {width} = selectedItem.value.getBoundingClientRect()
        const {left: left2} = container.value.getBoundingClientRect()
        const {left: left1} = selectedItem.value.getBoundingClientRect()
        const left = left1 - left2
        indicator.value.style.left = left + 'px'
        indicator.value.style.width = width + 'px'
      }
    })
    defaults.forEach((tag)=>{
      if(tag.type !== Tab){
        throw new Error('Tabs 子标签必须是Tab')
      }
    })
    const current = computed(()=>{
      return defaults.find((tag)=>{
        return tag.props.title ===props.selected
      })
    })
    const titles = defaults.map((tag)=>{
      return tag.props.title
    })
    const select =(title: string)=>{
      context.emit('update:selected',title)
    }
    return {
      defaults,titles,current,select,selectedItem,indicator,container
    }
  }
}
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.gulu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>
