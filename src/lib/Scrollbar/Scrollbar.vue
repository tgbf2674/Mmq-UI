<template>
  <div ref="scrollbar" class="gulu-scrollbar">
    <div ref="wrap" :class="[wrapClass,'gulu-scrollbar-wrap', native? '' : 'gulu-scrollbar-wrap-hidden-default']"
         :style="style" @scroll="handleScroll">
      <component :is="tag" ref="resize" :class="['gulu-scrollbar-view',viewClass]" :style="viewStyle">
        <slot></slot>
      </component>
    </div>
    <template v-if="!native">
      <bar :move="moveX" :ratio="ratioX" :size="sizeWidth" :always="always"></bar>
      <bar :move="moveY" :radio="ratioY" :size="sizeHeight" vertical :always="always"></bar>
    </template>
  </div>
</template>

<script lang="ts">
import {computed, onBeforeUnmount, nextTick, CSSProperties, defineComponent, onMounted, PropType, provide, ref} from 'vue';
import Bar from './Bar.vue';
import {
  addUnit, isArray,
  isString,
  toObject,
} from '../../utils/util';
import {addResizeListener, removeResizeListener} from '../../utils/resize-event';

export default defineComponent({
  name: 'Scrollbar',
  components: {Bar},
  props: {
    height: {
      type: [String, Number],
      default: ''
    },
    maxHeight: {
      type: [String, Number],
      default: ''
    },
    native: {
      type: Boolean,
      default: false
    },
    wrapStyle: {
      type: [String, Array] as PropType<string | CSSProperties[]>,
      default: ''
    },
    wrapClass:{
      type: [String,Array],
      default: ''
    },
    viewClass: {
      type: [String, Array],
      default: ''
    },
    viewStyle: {
      type: [String, Array] as PropType<string | CSSProperties[]>,
      default: ''
    },
    noResize: Boolean,
    tag: {
      type: String,
      default: 'div'
    },
    always: {
      type: Boolean,
      default: false
    },
    minSize: {
      type: Number,
      default: 20
    }
  },
  emits: ['scroll'],
  setup(props, {emit}) {
    const sizeWidth = ref('0');
    const sizeHeight = ref('0');
    const moveX = ref(0);
    const moveY = ref(0);
    const scrollbar = ref(null);
    const wrap = ref(null);
    const resize = ref(null);
    const ratioY = ref(1);
    const ratioX = ref(1);
    const GAP = 4;
    provide('scrollbar', scrollbar);
    provide('scrollbar-wrap', wrap);
    const handleScroll = () => {
      if (wrap.value) {
        const offsetHeight = wrap.value.offsetHeight - GAP;
        const offsetWidth = wrap.value.offsetWidth - GAP;
        moveY.value = ((wrap.value.scrollTop * 100) / offsetHeight) * ratioY.value;
        moveX.value = ((wrap.value.scrollLeft * 100) / offsetWidth) * ratioX.value;
        emit('scroll', {
          scrollTop: wrap.value.scrollTop,
          scrollLeft: wrap.value.scrollLeft
        });
      }
    };
    const setScrollTop = (value: number) => {
      wrap.value.scrollTop = value;
    };
    const setScrollLeft = (value: number) => {
      wrap.value.scrollLeft = value;
    };
    const update = () => {
      if (!wrap.value) return;
      const offsetHeight = wrap.value.offsetHeight - GAP;
      const offsetWidth = wrap.value.offsetWidth - GAP;
      const originalHeight = offsetHeight ** 2 / wrap.value.scrollHeight;
      const originalWidth = offsetWidth ** 2 / wrap.value.scrollWidth;
      const height = Math.max(originalHeight, props.minSize);
      const width = Math.max(originalWidth, props.minSize);
      ratioY.value = originalHeight / (offsetHeight - originalHeight) / (height / (offsetHeight - height));
      ratioX.value = originalWidth / (offsetWidth - originalWidth) / (width / (offsetWidth - width));
      sizeHeight.value = height + GAP < offsetHeight ? `${height}px` : '';
      sizeWidth.value = width + GAP < offsetWidth ? `${width}px` : '';
    };
    const style = computed(() => {
      let style = props.wrapStyle as CSSProperties;
      if (isArray(style)) {
        style = toObject(style);
        style.height = addUnit(props.height);
        style.maxHeight = addUnit(props.maxHeight);
      } else if (isString(style)) {
        style += addUnit(props.height) ? `height: ${addUnit(props.height)}` : '';
        style += addUnit(props.maxHeight) ? `max-height: ${addUnit(props.maxHeight)}` : '';
      }
      return style;
    });
    onMounted(() => {
      if (!props.native) {
        nextTick(update);
      }
      if (!props.noResize) {
        addResizeListener(resize.value, update);
        addEventListener('resize', update);
      }
    });
    onBeforeUnmount(()=>{
      if(!props.noResize){
        removeResizeListener(resize.value,update)
        removeEventListener('resize',update)
      }
    })
    return {
      moveX,
      moveY,
      ratioX,
      ratioY,
      sizeWidth,
      sizeHeight,
      style,
      scrollbar,
      wrap,
      resize,
      update,
      handleScroll,
      setScrollTop,
      setScrollLeft,
    };
  }

});
</script>

<style lang="scss" scoped>
.gulu-scrollbar{
  overflow: hidden;
  position: relative;
  height: 100%;
  .gulu-scrollbar-wrap{
    overflow: auto;
    height: 100%;
    .gulu-scrollbar-wrap-hidden-default{
      scrollbar-width: none;
      &::-webkit-scrollbar{
        display: none;
      }
    }
  }
  .gulu-scrollbar-thumb{
    position: relative;
    display: block;
    width: 0;
    height: 0;
    cursor: pointer;
    border-radius: inherit;
    background-color: #909399;
    transition: 0.5s background-color;
    opacity: 0.3;
    &:hover{
      background-color: #909399;
      opacity: 0.5;
    }
  }
  .gulu-scrollbar-bar{
    position: absolute;
    right: 2px;
    bottom: 2px;
    z-index: 1;
    border-radius: 4px;
    &.is-vertical{
      width: 6px;
      top: 2px;
      > div{
        width: 100%;
      }
    }
    &.is-horizontal{
      height: 6px;
      left: 2px;
      >div{
        height: 100%;
      }
    }
  }
}

.gulu-scrollbar-fade{
  &-enter-active{
    transition: opacity 340ms ease-out;
  }
  &-leave-active{
    transition: opacity 120ms ease-out;
  }

  &-enter-from,&-leave-active{
    opacity: 0;
  }
}
</style>
