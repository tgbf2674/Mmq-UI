<template>
  <div class="mmq-tabs">
    <div class="mmq-tabs-nav" ref="container">
      <div :class="['mmq-tabs-nav-item', {selected: t===selected}, { 'mmq-tabs-nav-type-card': type === 'card' }]" @click="select(t)" v-for="(t,index) in titles" :ref="el=>{if(t ===selected) selectedItem=el}" :key="index">{{t}}</div>
      <div class="mmq-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="mmq-tabs-content">
      <component class="mmq-tabs-content-item" :is="current" :key="current.props.title" />
    </div>
  </div>
</template>

<script lang="ts">
import Tab from '../lib/Tab.vue'
import {computed, defineComponent, ref, watchEffect} from 'vue';
export default defineComponent({
  name: 'MqTabs',
  props: {
    selected: {
      type: String
    },
    type: {
      type: String
    }
  },
  setup(props,context){
    const defaults = context.slots.default!()
    const selectedItem = ref<HTMLDivElement>()
    const indicator = ref<HTMLDivElement>()
    const container = ref<HTMLDivElement>()
    watchEffect(()=>{
      if(selectedItem.value && indicator.value) {
        const {width} = selectedItem.value.getBoundingClientRect()
        const {left: left2} = container.value!.getBoundingClientRect()
        const {left: left1} = selectedItem.value.getBoundingClientRect()
        const left = left1 - left2
        indicator.value.style.left = left + 'px'
        indicator.value.style.width = width + 'px'
      }
    })
    defaults.forEach((tag: any)=>{
      if(tag.type.name !== Tab.name){
        throw new Error('Tabs 子标签必须是Tab')
      }
    })
    const current = computed(()=>{
      return defaults.find((tag)=>{
        return tag.props!.title ===props.selected
      })
    })
    const titles = defaults.map((tag)=>{
      return tag.props!.title
    })
    const select =(title: string)=>{
      context.emit('update:selected',title)
    }
    return {
      defaults,titles,current,select,selectedItem,indicator,container
    }
  }
})
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.mmq-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px 16px;
      cursor: pointer;
      &.selected {
        color: $blue;
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      bottom: -1px;
      transition: all 250ms;
      width: 70%;
    }
    &-type-card{
      border: 1px solid #e4ede7;
      border-bottom: none;
      border-left: none;
      &:first-child {
        border-left: 1px solid #e4ede7;
      }
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>
