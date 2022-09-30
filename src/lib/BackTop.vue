<template>
  <div
      @click.stop="handleClick"
      :style="{
        'right': styleRight,
        'bottom': styleBottom
      }"
      class="el-backtop">
      <slot>
        ↑↑↑
      </slot>
    </div>
</template>

<script lang="ts">
import { ref } from "@vue/reactivity";
import { computed, onBeforeUnmount, onMounted } from "@vue/runtime-core";
export default {
  name: "backTop",
  props: {
    visibleHeight: {
      type: Number,
      default: 10,
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
    let el = ref();
    let container = ref();
    const styleBottom = computed(() => {
      return `${props.bottom}`;
    });
    const styleRight = computed(() => {
      return `${props.right}`;
    });
    onMounted(() => {
      init()
      container.value.addEventListener('scroll', onScroll())
    })
    const init = () => {
      container = document;
      el = document.documentElement;
      if (props.target) {
        el = document.querySelector(props.target);
        if (!el.value) {
          throw new Error(`target不存在，请检查`);
        }
        container.value = el.value;
      }
    };
    const onScroll = () => {
      const scrollTop = el.value.scrollTop;
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
      container.value.removeEventListener('scroll', onScroll())
    })
    return {
      visible,
      styleBottom,
      styleRight,
      handleClick
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
