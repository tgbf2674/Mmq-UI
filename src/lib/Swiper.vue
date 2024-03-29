<template>
  <div class="mmq-swiper-container">
    <div class="mmq-swiper" v-for="(item,index) in defaults" :key="index" :class="getClass(index)">
      <div class="fade">
        <component :is="item" v-show="index===active"></component>
      </div>
    </div>

    <div class="dotWrapper" ref="dotRef">
      <span v-for="(item,index) in defaults" :key="index" class="dot" @click="currentSwiper(index)"></span>
    </div>

    <a class="prev" @click="reduceActive">&#10094</a>
    <a class="next" @click="addActive">&#10095</a>
  </div>
  <br>
  <slot v-if="false"></slot>
</template>

<script lang="ts">
import {onUnmounted, onMounted, ref, defineComponent} from 'vue';
export default defineComponent({
  name: 'MqSwiper',
  props:{
    auto: {
      type: Boolean,
      default: false
    }
  },
  setup(props:{auto: boolean}, {slots}){
    const defaults = slots.default!()
    const active = ref(0)
    const dotRef = ref()
    const timer:any = ref(0)
    const currentSwiper = (val: number)=>{
      active.value = val
      dotRef.value.children[active.value].className += ' current'
    }
    const getClass = (val:number)=>{
      if(val === active.value){
        return 'current'
      }else {
        return ''
      }
    }
    const addActive = ()=>{
      if(active.value === defaults.length-1){
        active.value=0
      }else{
        active.value +=1
      }
    }
    const reduceActive =()=>{
      if(active.value === 0){
        active.value = defaults.length-1
      }else{
        active.value -= 1
      }
    }
    const setActive =()=>{
      if(active.value === defaults.length-1){
        active.value = 0
      }else{
        active.value +=1
      }
    }
    onMounted(()=>{
      if(props.auto){
      timer.value = setInterval(()=>{
        setActive()
      },3000)
    }
    })
    onUnmounted(()=>{
      if(props.auto) {
        clearInterval(timer.value)
      }
    })
    return {defaults,active,currentSwiper,addActive,reduceActive,getClass,dotRef}
  }
})
</script>

<style lang="scss" scoped>
@import "./src/style/theme.scss";
.dotWrapper{
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%,-60%);
}
.mmq-swiper-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}
.prev:hover, .next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}
.number-Text {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}
.dot {
  cursor: pointer;
  height: 10px;
  width: 10px;
  margin: 0 4px;
  background-color: #fff;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.dot .current{
  background-color: #67c23a;
}

.active, .dot:hover {
  background-color: #717171;
}
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}
@-webkit-keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}
@keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}
/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .prev, .next, .text {font-size: 11px}
}
</style>
