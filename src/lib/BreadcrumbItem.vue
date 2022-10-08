<template>
<span class="mmq-breadcrumb-item">
  <span ref="link" :class="['mmq-breadcrumb-inner',to? 'is-link' : '']" role="link">
    <slot></slot>
  </span>
  <Icon fill="#c0c4cc" v-if="separatorClass" class="mmq-breadcrumb-separator" :name="separatorClass"></Icon>
  <span v-else class="mmq-breadcrumb-separator" role="presentation">{{ separator }}</span>
</span>
</template>

<script lang="ts">
import {getCurrentInstance, inject, onMounted, PropType, Ref, ref} from 'vue';
import Icon from './Icon.vue'
export default {
  name: 'BreadcrumbItem',
  components: {Icon},
  props: {
    to:{
      type: [String,Object] as PropType<string>,
      default:''
    },
    replace: {
      type: Boolean,
      default:false
    }
  },
  setup(props: { to: PropType<string>; replace: boolean; }){
    const link:Ref = ref(null)
    const parent = inject<IBreadcrumbProps>('breadcrumb')
    const instance = getCurrentInstance()
    const router = instance!.appContext.config.globalProperties.$router
    onMounted(()=>{
      link.value.setAttribute('role','link')
      link.value.addEventListener('click',()=>{
        if(!props.to || !router)return
        props.replace ? router.replace(props.to) : router.push(props.to)
      })
    })
    return {
      link,separator: parent!.separator,
      separatorClass: parent!.separatorClass
    }
  }
}
</script>

<style lang="scss" >
.mmq-breadcrumb-item{
  float: left;
  .mmq-breadcrumb-inner{
    font-weight: 700;
    text-decoration: none;
    transition: color 0.2s cubic-bezier(0.645,0.045,0.355,1);
    color: #c0c4cc;
    a{
      font-weight: bold;
      text-decoration: none;
      transition: color 0.2s cubic-bezier(0.645,0.045,0.355,1);
      color: #303133;
      &:hover{
        color: #409eff;
        cursor: pointer;
      }
    }
  }
  .is-link{
    font-weight: bold;
    text-decoration: none;
    transition: color 0.2s cubic-bezier(0.645,0.045,0.355,1);
    color: #303133;
    &:hover{
      color: #409eff;
      cursor: pointer;
    }
  }
  .mmq-breadcrumb-separator{
    margin: 0 9px;
    font-weight: 700;
    width: 14px;
    color: #c0c4cc;
  }
}
</style>
