<demo>
预览
</demo>
<template>
  <ImageModel preview src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg">
    <img width="300px" src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg" alt=""/>
  </ImageModel>
</template>

<script lang="ts">
import ImageModel from "../../../lib/ImageModel.vue";
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
