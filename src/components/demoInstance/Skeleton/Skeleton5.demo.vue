<demo>
自定义loading
</demo>
<template>
  <skeleton style="width:240px" animated>
    <template #template>
      <skeletonItem variant="image" style="width: 240px; height: 240px">
      </skeletonItem>
      <div style="padding: 14px">
        <skeletonItem variant="p" style="width: 50%"></skeletonItem>
        <div style="display: flex;align-items: center;justify-content: space-between">
          <skeletonItem variant="text" style="margin-right: 16px"></skeletonItem>
          <skeletonItem variant="text" style="width: 30%"></skeletonItem>
        </div>
      </div>
    </template>
  </skeleton>
</template>

<script lang="ts">
import skeleton from '../../../lib/Skeleton.vue';
import skeletonItem from '../../../lib/SkeletonItem.vue';

export default {
  name: 'Skeleton2.demo',
  components: {
    skeleton, skeletonItem
  },
};
</script>

<style scoped>

</style>
