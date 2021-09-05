<demo>
自定义内容
</demo>
<template>
  <Result title="404" subTitle="抱歉，请求错误">
    <template #icon>
      <ImageModel>
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" alt="" />
      </ImageModel>
    </template>
    <template #extra>
      <Button level="main">返回</Button>
    </template>
  </Result>
</template>

<script lang="ts">
import Result from '../../../lib/Result/Result.vue';
import ImageModel from '../../../lib/ImageModel.vue';
import Button from '../../../lib/Button.vue';
export default {
  name: 'Result1.demo',
  components: {Result, ImageModel,Button}
};
</script>

<style scoped>

</style>
