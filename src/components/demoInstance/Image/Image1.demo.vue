<demo>
常规用法
</demo>
<template>
  <div class="demo-image">
    <div v-for="fit in fits" :key="fit" class="block">
      <span class="demonstration">{{ fit }}</span>
      <ImageModel style="width: 100px; height: 100px" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" :fit="fit" />
    </div>
  </div>
</template>

<script lang="ts">
import ImageModel from "../../../lib/ImageModel.vue";
export default {
  components: {ImageModel},
  setup() {
    const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']
    return {
      fits
    };
  }
};
</script>

<style lang="scss" scoped>
.demo-image .block {
  padding: 30px 0;
  text-align: center;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #dcdfe6;
  width: 20%;
  box-sizing: border-box;
  vertical-align: top;
}
.demo-image .block:last-child {
  border-right: none;
}
.demo-image .demonstration {
  display: block;
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
