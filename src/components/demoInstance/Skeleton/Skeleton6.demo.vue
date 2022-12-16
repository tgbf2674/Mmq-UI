<demo>
防止渲染抖动
</demo>
<template>
  <div style="margin-bottom: 20px;display: flex;flex-direction: column">
    <label style="margin-right: 16px">切换Loading</label>
    <Switch v-model:value="loading"></Switch>
  </div>
  <skeleton style="width:240px" :throttle="500" :loading="loading"  animated>
    <template #template>
      <skeletonItem variant="image" style="width: 240px; height: 240px">
      </skeletonItem>
      <div style="padding: 14px">
        <skeletonItem variant="h3" style="width: 50%"></skeletonItem>
        <div style="display: flex;align-items: center;justify-content: space-between">
          <skeletonItem variant="text" style="margin-right: 16px"></skeletonItem>
          <skeletonItem variant="text" style="width: 30%"></skeletonItem>
        </div>
      </div>
    </template>
    <template #default>
      <div>
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          class="image"
        />
        <div style="padding: 14px;">
          <span>好吃的汉堡</span>
        </div>
      </div>
    </template>
  </skeleton>
</template>

<script lang="ts">
import skeleton from '../../../lib/Skeleton.vue';
import skeletonItem from '../../../lib/SkeletonItem.vue';
import Switch from '../../../lib/Switch.vue';
import Card from '../../../lib/Card.vue';
import {ref} from 'vue';

export default {
  name: 'Skeleton2.demo',
  components: {
    skeleton, skeletonItem,Card,Switch
  },
  setup(){
    const loading = ref(false)
    return {
      loading
    }
  }
};
</script>

<style scoped>

</style>
