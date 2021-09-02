<template>
  <div class="demo">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <div class="demo-component">
      <component :is="component"></component>
    </div>
    <div class="demo-actions">
      <Button @click="toggleCode" v-if="codeVisible">隐藏代码</Button>
      <Button @click="toggleCode" v-else>查看代码</Button>
    </div>
    <transition name="fade">
      <pre v-if="codeVisible" class="language-css" v-html="html"></pre>
    </transition>
  </div>
</template>

<script lang="ts">
import 'prismjs'
import 'prismjs/themes/prism-okaidia.css'
import Button from '../lib/Button.vue'
import {computed, ref} from 'vue';
const Prism = (window as any).Prism
export default {
  name: 'Demo',
  components: {
    Button
  },
  props: {
    component: Object
  },
  setup(props){
    const html = computed(()=>{
      return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html' )
    })
    const codeVisible = ref<boolean>(false)
    const toggleCode = ()=>{
      codeVisible.value = !codeVisible.value
    }
    return {
      Prism,html,codeVisible,toggleCode
    }
  }
}
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;

.fade-leave-active {
  -webkit-animation: flip-out-hor-top 0.8s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
  animation: flip-out-hor-top 0.8s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
}
.fade-enter-active {
  -webkit-animation: flip-in-hor-bottom 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  animation: flip-in-hor-bottom 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
@-webkit-keyframes flip-in-hor-bottom {
  0% {
    -webkit-transform: rotateX(80deg);
    transform: rotateX(80deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateX(0);
    transform: rotateX(0);
    opacity: 1;
  }
}
@keyframes flip-in-hor-bottom {
  0% {
    -webkit-transform: rotateX(80deg);
    transform: rotateX(80deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateX(0);
    transform: rotateX(0);
    opacity: 1;
  }
}
@-webkit-keyframes flip-out-hor-top {
  0% {
    -webkit-transform: rotateX(0);
    transform: rotateX(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: rotateX(70deg);
    transform: rotateX(70deg);
    opacity: 0;
  }
}
@keyframes flip-out-hor-top {
  0% {
    -webkit-transform: rotateX(0);
    transform: rotateX(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: rotateX(70deg);
    transform: rotateX(70deg);
    opacity: 0;
  }
}

.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
>h2 {
  font-size: 20px;
  padding: 8px 16px;
  border-bottom: 1px solid $border-color;
}
&-component {
   padding: 16px;
  box-sizing: border-box;
 }
&-actions {
   padding: 8px 16px;
   border-top: 1px dashed $border-color;
 }
&-code {
   padding: 8px 16px;
   border-top: 1px dashed $border-color;
>pre {
  line-height: 1.1;
  font-family: Consolas, 'Courier New', Courier, monospace;
  margin: 0;
}
}
}
</style>
