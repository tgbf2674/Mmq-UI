<template>
  <div class="mmq-imageModel-wrapper">
    <div :class="['myImg', isPreview]" @click="imgClick">
      <slot>
        <img :src="src" :style="fitStyle">
      </slot>
    </div>
    <teleport v-if="preview" to="body">
      <div @click="closeModel" ref="modelRef" class="model">
        <span ref="closeRef" class="mmq-imageModel-close">&times;</span>
        <img ref="modelImgRef" class="model-content" src="" alt="">
      </div>
    </teleport>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, PropType, ref} from 'vue';

export default defineComponent({
  name: 'Image',
  props: {
    //放大展示的图片路径
    src: {
      type: String,
      default: ''
    },
    preview: {
      type: Boolean,
      default: false
    },
    fit: {
      type: String as PropType<imageFitOptions>
    }
  },
  setup(props) {
    const modelRef = ref();
    const modelImgRef = ref();
    const isPreview = computed(() => {
      return props.preview ? 'preview' : ''
    })
    const fitStyle = computed(() => {
      return { 'object-fit' : props.fit }
    })
    const imgClick = (event: any) => {
      modelRef.value.style.display = 'flex';
      modelImgRef.value.src = props.src || event.target.src;
    };
    const closeModel = () => {
      modelRef.value.style.display = 'none';
    };
    return {modelRef, modelImgRef, imgClick, closeModel, isPreview, fitStyle};
  }
});
</script>

<style lang="scss" scoped>
.mmq-imageModel-wrapper {
  .myImg {
    border-radius: 5px;
    transition: 0.3s;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      max-width: 100%;
    }
  }
  .preview {
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }
}

.model {
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 9999;

  &:hover {
    cursor: pointer;
  }
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

.mmq-imageModel-close {
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
