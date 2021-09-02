<demo>
放大展示其他图片
</demo>
<template>
  <ImageModel modelImgSrc="https://s3.bmp.ovh/imgs/2021/09/28a6eb31320a61be.jpg">
    <img width="300px" src="https://s3.bmp.ovh/imgs/2021/09/d16c8d3c09fbc4ca.jpg" alt=""/>
  </ImageModel>
</template>

<script lang="ts">
import ImageModel from "../../lib/ImageModel.vue";
export default {
  components: {ImageModel},
  setup() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  max-width: 300px;
}
</style>
