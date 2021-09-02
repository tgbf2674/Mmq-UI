<demo>
常规用法
</demo>
<template>
  <ImageModel>
    <img src="https://s3.bmp.ovh/imgs/2021/09/28a6eb31320a61be.jpg" alt=""/>
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
