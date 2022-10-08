<template>
  <div :class="['mmq-skeleton-item',`mmq-skeleton-${variant}`]">
    <imagePlaceholder v-if="variant === 'image' "></imagePlaceholder>
  </div>
</template>

<script lang="ts">
import imagePlaceholder from './imagePlaceholder.vue';
import {defineComponent, PropType} from 'vue';

export default defineComponent({
  name: 'SkeletonItem',
  components: {
    imagePlaceholder
  },
  props: {
    variant: {
      type: String as PropType<Variants>,
      default: 'text'
    }
  }
});
</script>

<style lang="scss" scoped>
.mmq-skeleton {
  .mmq-skeleton-item {
    background: #f2f2f2;
    display: inline-block;
    height: 16px;
    border-radius: 4px;
    width: 100%;
  }

  .mmq-skeleton-button {
    height: 40px;
    width: 64px;
    border-radius: 4px;
  }

  .mmq-skeleton-p {
    width: 100%;
    &.is-last {
      width: 61%;
    }

    &.is-first {
      width: 33%;
    }
  }

  .mmq-skeleton-text {
    width: 100%;
    height: 16px;
  }

  .mmq-skeleton-h1 {
    height: 36px;
  }

  .mmq-skeleton-h3 {
    height: 28px;
  }

  .mmq-skeleton-h5 {
    height: 16px;
  }

  .mmq-skeleton-image {
    width: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0;

    svg {
      fill: #909399;
      width: 22%;
      height: 22%;
    }
  }
}
</style>
