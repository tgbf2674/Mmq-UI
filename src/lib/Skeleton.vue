<template>
  <template v-if="uiLoading">
    <div :class="['mmq-skeleton',animated ? 'is-animated' : '']" v-bind="$attrs">
      <template v-for="i in count" :key="i">
        <slot v-if="loading" :key="i" name="template">
          <mmq-skeleton-item class="is-first" variant="p"></mmq-skeleton-item>
          <mmq-skeleton-item v-for="item in rows" :key="item"
                              :class="{'mmq-skeleton-paragraph': true, 'is-last': item === rows && rows >1}"
                              variant="p"></mmq-skeleton-item>
        </slot>
      </template>
    </div>
  </template>
</template>

<script lang="ts">
import SkeletonItem from './SkeletonItem.vue';
import {computed, defineComponent} from 'vue';
import useThrottleRender from '../utils/use-throttle-render'

export default defineComponent({
  name: 'MqSkeleton',
  components: {
    'mmq-skeleton-item': SkeletonItem
  },
  props: {
    animated: {
      type: Boolean,
      default: false
    },
    count: {
      type: Number,
      default: 1
    },
    rows: {
      type: Number,
      default: 3
    },
    loading: {
      type: Boolean,
      default: true
    },
    throttle: {
      type: Number
    }
  },
  setup(props) {
    const innerLoading = computed(() => {
      return props.loading;
    });
    const uiLoading = useThrottleRender(innerLoading, props.throttle);
    return {
      uiLoading
    };
  },
});
</script>

<style lang="scss" scoped>
@keyframes mmq-skeleton-loading {
  0%{
    background-position: 100% 50%;
  }
  100%{
    background-position: 0 50%;
  }
}

.mmq-skeleton{
  width: 100%;
  &.is-first, .mmq-skeleton-paragraph{
    height: 16px;
    margin-top: 16px;
    background: #f2f2f2;
  }
   &.is-animated{
     ::v-deep .mmq-skeleton-item{
      background: linear-gradient(90deg,#f2f2f2 25%,#e6e6e6 37%,#f2f2f2 63%);
      background-size: 400% 100%;
      animation: mmq-skeleton-loading 1.4s ease infinite;
    }
  }
}
</style>
