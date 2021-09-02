<template>
  <div class="gulu-imageModel-wrapper">
    <slot v-if="false" ref="imgRef" @click="imgClick"></slot>
    <component class="myImg" :is="$slots.default" @click="imgClick" ref="imgRef"></component>
    <teleport to="body">
      <div ref="modelRef" class="model">
        <span @click="closeModel" ref="closeRef" class="gulu-imageModel-close">&times;</span>
        <img ref="modelImgRef" class="model-content" src="" alt="">
      </div>
    </teleport>
  </div>
</template>

<script lang="ts">
import {ref} from 'vue';

export default {
  name: 'Image',
  props: {
    //放大展示的图片路径
    modelImgSrc: {
      type: String,
      default: ''
    }
  },
  setup(props: any) {
    const modelRef = ref();
    const imgRef = ref();
    const modelImgRef = ref();
    const closeRef = ref();
    const imgClick = (event: any) => {
      modelRef.value.style.display = 'block';
      modelImgRef.value.src = props.modelImgSrc || event.target.src;
    };
    const closeModel = () => {
      modelRef.value.style.display = 'none';
    };
    return {modelRef, modelImgRef, imgClick, closeModel};
  }
};
</script>

<style lang="scss" scoped>
.gulu-imageModel-wrapper {
  .myImg {
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
    width: 100%;
    max-width: 300px;

    &:hover {
      opacity: 0.7;
    }
  }
}

.model {
  display: none;
  position: fixed;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 9999;
}

.model-content {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
}

.model-content {
  -webkit-animation-name: zoom;
  -webkit-animation-duration: 0.6s;
  animation-name: zoom;
  animation-duration: 0.6s;
}

@-webkit-keyframes zoom {
  from {
    -webkit-transform: scale(0)
  }
  to {
    -webkit-transform: scale(1)
  }
}

@keyframes zoom {
  from {
    transform: scale(0)
  }
  to {
    transform: scale(1)
  }
}

.gulu-imageModel-close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
  &:hover,
  &:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
  }
}



@media only screen and (max-width: 700px) {
  .model-content {
    width: 100%;
  }
}

</style>
