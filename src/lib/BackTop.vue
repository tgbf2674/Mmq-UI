<template>
  <div
      @click.stop="handleClick"
      v-show="visible"
      :style="positionStyle"
      class="mmq-backtop">
      <slot>
        ↑↑↑
      </slot>
  </div>
</template>

<script lang="ts">
import { ref } from "@vue/reactivity";
import { computed, onBeforeUnmount, onMounted } from "@vue/runtime-core";
import {defineComponent} from 'vue';
import {throttle} from 'mmq-utils';
export default defineComponent({
  name: "MqBackTop",
  props: {
    visibleHeight: {
      type: Number,
      default: 100,
    },
    right: {
      type: Number,
      default: 40,
    },
    bottom: {
      type: Number,
      default: 40,
    },
    target: {
      type: [String],
    },
  },
  setup(props, context) {
    const cubic = (value: number) => Math.pow(value, 3);
    const easeInOutCubic = (value: number) =>
      value < 0.5 ? cubic(value * 2) / 2 : 1 - cubic((1 - value) * 2) / 2;
    let visible = ref(false);
    let el = ref()
    let container = ref();
    const positionStyle = computed(() => {
      return {
        right: `${props.right}px`,
        bottom: `${props.bottom}px`
      }
    })
    onMounted(() => {
      init()
      container.value.addEventListener('scroll', throttle(onScroll,200))
    })
    const init = () => {
      container.value = document;
      el.value = document.documentElement;
      if (props.target) {
        if (!el) {
          throw new Error(`target不存在，请检查`);
        } else {
          el.value = document.querySelector(props.target)!;
        }
        container.value = el.value;
      }
    };
    const onScroll = () => {
      const scrollTop = el.value.scrollTop;
      console.log(scrollTop)
      visible.value = scrollTop >= props.visibleHeight;
    };
    const handleClick = (e: Event) => {
      scrollToTop()
      context.emit("click", e);
    };
    const scrollToTop = () => {
      const temp = el.value
      const beginTime = Date.now();
      const beginValue = temp.scrollTop;
      const rAF =
        window.requestAnimationFrame || ((func) => setTimeout(func, 16));
      const frameFunc = () => {
        const progress = (Date.now() - beginTime) / 500;
        if (progress < 1) {
          el.value.scrollTop = beginValue * (1 - easeInOutCubic(progress));
          rAF(frameFunc);
        } else {
          el.value.scrollTop = 0;
        }
      };
      rAF(frameFunc)
    };
    onBeforeUnmount(() => {
      container.value.removeEventListener('scroll', onScroll)
    })
    return {
      visible,
      handleClick,
      positionStyle
    };
  },
});
</script>

<style lang="scss" scoped>
.mmq-backtop {
  position: fixed;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  z-index: 5;
  transition: ;
  &:hover {
    background-color: #409eff;
  }
}
</style>
