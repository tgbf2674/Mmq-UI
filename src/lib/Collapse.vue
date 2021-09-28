<template>
  <div class="gulu-collapse">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {defineComponent, getCurrentInstance, provide} from 'vue';
import mitt from 'mitt';
export const emitter = mitt();
export default defineComponent({
  name: "Collapse",
  props: {
    activeName: {
      type: Array,
      default: ()=>{return []}
    },
    accordion: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const internalInstance = getCurrentInstance();
    emitter.on('itemClick', (val:any) => {
      const {newActiveName, uid} = val;
      if (internalInstance!.uid !== uid) {
        return;
      }
      const index = props.activeName.findIndex((item) => item === newActiveName);
      //props.activeName是个代理对象，不是数组
      const propsActiveName = Array.from(props.activeName);
      if (props.accordion) {
        index > -1 ? context.emit('update:activeName', []) : context.emit('update:activeName', [newActiveName]);
      } else {
        if (index > -1) {
          propsActiveName.splice(index, 1);
          context.emit('update:activeName', propsActiveName);
        } else {
          context.emit('update:activeName', [...propsActiveName, newActiveName]);
        }
      }
    });
    provide('collapse', props);
    return {};
  }
});
</script>

<style lang='scss' scoped>
.gulu-collapse{
  border-top: 1px solid #ebeef5;
}
</style>
