<template>
  <Teleport to="body">
    <template v-if="visible">
      <div @click="onClickOverlay" class="gulu-dialog-overlay"></div>
      <div class="gulu-dialog-wrapper" :draggable="draggable" @dragend="end" @dragstart="start">
        <div class="gulu-dialog">
          <header>
            <slot name="title"/>
            <span @click="close" class="gulu-dialog-close"></span>
          </header>
          <main>
            <slot name="content"></slot>
          </main>
          <footer>
            <Button @click="ok" level="main" :loading="isLoading">OK</Button>
            <Button @click="cancel">Cancel</Button>
          </footer>
        </div>
      </div>
    </template>
  </Teleport>
</template>

<script lang="ts">
import Button from './Button.vue';
import {ref,defineComponent} from 'vue';

export default defineComponent({
  name: 'Dialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '请输入标题'
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    ok: {
      type: Function
    },
    cancel: {
      type: Function
    },
    draggable: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Button
  },
  setup(props, context) {
    const isLoading = ref(false);
    const close = () => {
      context.emit('update:visible', false);
    };
    const onClickOverlay = () => {
      if (props.closeOnClickOverlay) {
        close();
      }
    };
    const ok = () => {
      if (props.ok) {
        isLoading.value = true;
        props.ok().then((res:boolean) => {
          if (res) {
            close();
            isLoading.value = false;
          }
        });
      } else {
        close();
      }
    };
    const cancel = () => {
      props.cancel && props.cancel();
      close();
    };
    const x1 = ref(null);
    const y1 = ref(null);
    const end = (e:any) => {
      const {x, y} = e;
      const {offsetTop, offsetLeft} = e.target;
      e.target.style.top = offsetTop - (y1.value! - y) + 'px';
      e.target.style.left = offsetLeft - (x1.value! - x) + 'px';
    };
    const start = (e:any) => {
      const {x, y} = e;
      x1.value = x;
      y1.value = y;
    };
    return {
      close, onClickOverlay, ok, cancel, isLoading, end, start
    };
  }
});
</script>

<style lang="scss">
@import "./src/style/theme.scss";
$radius: 4px;
$border-color: #d9d9d9;
.gulu-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 30em;
  max-width: 90%;

  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }

  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }

  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }

  > main {
    padding: 12px 16px;
  }

  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }

  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;

    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>
