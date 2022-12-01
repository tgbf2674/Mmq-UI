<template>
  <div class="mmq-tabs">
    <div :class="['mmq-tabs-nav', borderCardClass]" ref="container">
      <div :class="['mmq-tabs-nav-item', {selected: t===modelValue}, type ? `mmq-tabs-nav-type-${type}`: null]" @click="select(t)" v-for="(t,index) in titles" :ref="el=>{if(t ===modelValue) selectedItem=el}" :key="index">{{t}}</div>
      <div v-if="!type" class="mmq-tabs-nav-indicator" ref="indicator"></div>
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
    modelValue: {
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
    const borderCardClass = computed(() => {
      if (props.type === 'border-card') return 'mmq-tabs-nav-border-wrapper'
    })
    const current = computed(()=>{
      return defaults.find((tag)=>{
        return tag.props!.title ===props.modelValue
      })
    })
    const titles = defaults.map((tag)=>{
      return tag.props!.title
    })
    const select =(title: string)=>{
      context.emit('update:modelValue',title)
    }
    return {
      defaults,titles,current,select,selectedItem,indicator,container, borderCardClass
    }
  }
})
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.mmq-tabs {
  .mmq-tabs-nav {
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
  .mmq-tabs-nav-border-wrapper {
    background: #f5f7fa;
    border: 1px solid #e4ede7;
    border-radius: 4px;
    .selected {
      background: #fff;
      transition: all 250ms;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>
