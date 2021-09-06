<template>
<div class="gulu-result">
  <div class="gulu-result-icon">
    <slot name="icon">
      <component :is="iconElement" :class="iconElement"></component>
    </slot>
  </div>
  <div v-if="title || $slots.title" class="gulu-result-title">
    <slot name="title">
      <p>{{title}}</p>
    </slot>
  </div>
  <div v-if="subTitle || $slots.subTitle" class="gulu-result-subTitle">
    <slot name="subTitle">
      <p>{{ subTitle }}</p>
    </slot>
  </div>
  <div v-if="$slots.extra" class="gulu-result-extra">
    <slot name="extra"></slot>
  </div>
</div>
</template>

<script lang="ts">
import IconSuccess from './icon-success.vue'
import IconError from './icon-error.vue'
import IconWarning from './icon-warning.vue'
import IconInfo from './icon-info.vue'
import {computed, defineComponent} from 'vue';

const IconMap:any = {
  success: 'icon-success',
  warning: 'icon-warning',
  error: 'icon-error',
  info: 'icon-info',
}
export default defineComponent({
  name: 'Result',
  components: {
    [IconSuccess.name]: IconSuccess,
    [IconError.name]: IconError,
    [IconWarning.name]: IconWarning,
    [IconInfo.name]: IconInfo,
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    },
    icon: {
      type:String,
      default: 'info'
    }
  },
  setup(props){
    const iconElement = computed(()=>{
      const icon = props.icon
      return icon && IconMap[icon] ? IconMap[icon]: 'icon-info'
    })
    return {iconElement}
  }
})
</script>

<style lang="scss" scoped>
.gulu-result{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  box-sizing: border-box;
  padding: 40px 30px;
  .gulu-result-icon{
    svg{
      width: 64px;
      height: 64px;
    }
  }
  .gulu-result-title{
    margin-top: 20px;
    p{
      margin: 0;
      font-size: 20px;
      line-height: 1.3;
    }
  }
  .gulu-result-subTitle{
    margin-top: 10px;
    p{
      margin: 0;
      font-size: 14px;
      line-height: 1.3;
    }
  }
  .gulu-result-extra{
    margin-top: 30px;
  }
  .icon-success{
    fill: #67c23a;
  }
  .icon-warning{
    fill: #e6a23c;
  }
  .icon-info{
    fill: #909399;
  }
  .icon-error{
    fill: #f56c6c;
  }
}
</style>
