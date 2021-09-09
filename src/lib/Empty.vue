<template>
<div class="gulu-empty">
  <div class="gulu-empty-image" :style="imageStyle">
    <img :src="image" v-if="image" />
    <slot v-else name="image">
      <img-empty></img-empty>
    </slot>
  </div>
  <div class="gulu-empty-description">
    <slot v-if="$slots.description" name="description"></slot>
    <p v-else>{{emptyDescription}}</p>
  </div>
  <div v-if="$slots.default" class="gulu-empty-bottom">
    <slot></slot>
  </div>
</div>
</template>

<script lang="ts">
import ImgEmpty from './ImageEmpty.vue'
import {computed, defineComponent, onMounted} from 'vue';
export default defineComponent({
  name: 'Empty',
  components: {
    'img-empty': ImgEmpty
  },
  props: {
    image: {
      type: String,
      default: ''
    },
    imageSize:{
      type: Number
    },
    description: {
      type: String,
      default: '暂无数据'
    }
  },
  setup({description,imageSize}){
    const emptyDescription = computed(()=>{
      return description
    })
    const imageStyle = computed(()=>{
      return {
        width: imageSize? `${imageSize}px`: ''
      }
    })
    return {
      emptyDescription,imageStyle
    }
  }
})
</script>

<style lang="scss">
.gulu-empty{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  box-sizing: border-box;
  padding: 40px 0;
  .gulu-empty-image{
    width: 160px;
    img{
      user-select: none;
      width: 100%;
      height: 100%;
      vertical-align: top;
      object-fit: contain;
    }
    svg{
      fill: #dcdde0;
      width: 100%;
      height: 100%;
      vertical-align: top;
    }
  }
  .gulu-empty-description{
    margin-top: 20px;
    p{
      margin: 0;
      font-size: 20px;
      color: #909399;
    }
  }
  .gulu-empty-bottom{
    margin-top: 20px;
  }
}
</style>
