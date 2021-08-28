<template>
  <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @before-leave="beforeLeave" @leave="leave" @after-leave="afterLeave">
    <div class="spread" v-show="visible">
      <slot></slot>
    </div>
  </transition>
</template>

<script lang="ts">
import {defineComponent, ref, computed} from "vue";
export default defineComponent({
  name: 'Spread',
  props: {
    visible: {type: Boolean, required: true},
    //是否横向展开
    horizontal: {type: Boolean, default: false},
    //动画速度——时间
    duration: {type: [Number, String], default: 300}
  },
  setup(props) {
    const dataset = ref({
      oldPaddingTop: '',
      oldPaddingBottom: '',
      oldPaddingLeft: '',
      oldPaddingRight: '',
      oldOverflow: ''
    });
    const verticalTransition = computed(() => {
      return `${props.duration}ms height ease-in-out, ${props.duration}ms padding-top ease-in-out, ${props.duration}ms padding-bottom ease-in-out`;
    });
    const horizontalTransition = computed(() => {
      return `${props.duration}ms width ease-in-out, ${props.duration}ms padding-left ease-in-out, ${props.duration}ms padding-right ease-in-out`;
    });
    const beforeEnter = (el: HTMLDivElement) => {
      if (props.horizontal) {
        el.style.transition = horizontalTransition.value;
        dataset.value.oldPaddingLeft = el.style.paddingLeft;
        dataset.value.oldPaddingRight = el.style.paddingRight;
        el.style.width = String(0);
        el.style.paddingLeft = String(0);
        el.style.paddingRight = String(0);
      } else {
        el.style.transition = verticalTransition.value;
        dataset.value.oldPaddingTop = el.style.paddingTop;
        dataset.value.oldPaddingBottom = el.style.paddingBottom;
        el.style.height = String(0);
        el.style.paddingTop = String(0);
        el.style.paddingBottom = String(0);
      }
    };
    const enter = (el: HTMLDivElement) => {
      dataset.value.oldOverflow = el.style.overflow;
      if (props.horizontal) {
        if (el.scrollWidth !== 0) {
          el.style.width = el.scrollWidth + 'px';
        } else {
          el.style.width = '';
        }
        el.style.paddingLeft = dataset.value.oldPaddingLeft;
        el.style.paddingRight = dataset.value.oldPaddingRight;
      } else {
        if (el.scrollHeight !== 0) {
          el.style.height = el.scrollHeight + 'px';
        } else {
          el.style.height = '';
        }
        el.style.paddingTop = dataset.value.oldPaddingTop;
        el.style.paddingBottom = dataset.value.oldPaddingBottom;
      }
      el.style.overflow = 'hidden';
    };
    const afterEnter = (el: HTMLDivElement) => {
      el.style.transition = '';
      el.style.overflow = dataset.value.oldOverflow;
      props.horizontal ? el.style.width = '' : el.style.height = '';
    };
    const beforeLeave = (el: HTMLDivElement) => {
      dataset.value.oldOverflow = el.style.overflow;
      if (props.horizontal) {
        dataset.value.oldPaddingLeft = el.style.paddingLeft;
        dataset.value.oldPaddingRight = el.style.paddingRight;
        el.style.width = el.scrollWidth + 'px';
      } else {
        dataset.value.oldPaddingTop = el.style.paddingTop;
        dataset.value.oldPaddingBottom = el.style.paddingBottom;
        el.style.height = el.scrollHeight + 'px';
      }
      el.style.overflow = 'hidden';
    };
    const leave = (el: HTMLDivElement) => {
      if (props.horizontal) {
        if (el.scrollWidth !== 0) {
          el.style.transition = horizontalTransition.value;
          el.style.width = String(0);
          el.style.paddingLeft = String(0);
          el.style.paddingRight = String(0);
        }
      } else {
        if (el.scrollHeight !== 0) {
          el.style.transition = verticalTransition.value;
          el.style.height = String(0);
          el.style.paddingTop = String(0);
          el.style.paddingBottom = String(0);
        }
      }
    };
    const afterLeave = (el: HTMLDivElement) => {
      el.style.transition = '';
      el.style.overflow = dataset.value.oldOverflow;
      if (props.horizontal) {
        el.style.width = '';
        el.style.paddingLeft = dataset.value.oldPaddingLeft;
        el.style.paddingRight = dataset.value.oldPaddingRight;
      } else {
        el.style.height = '';
        el.style.paddingTop = dataset.value.oldPaddingTop;
        el.style.paddingBottom = dataset.value.oldPaddingBottom;
      }
    };
    return {
      verticalTransition,
      horizontalTransition,
      dataset,
      beforeEnter,
      enter,
      afterEnter,
      beforeLeave,
      leave,
      afterLeave
    };
  }
});
</script>

