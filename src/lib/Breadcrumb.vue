<template>
  <div ref="breadcrumb" class="mmq-breadcrumb" aria-label="Breadcrumb" role="navigation">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, provide, Ref, ref} from 'vue';

export default defineComponent({
  name: 'MqBreadcrumb',
  props: {
    separator: {
      type: String,
      default: '/'
    },
    separatorClass: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const breadcrumb:Ref = ref(null);
    provide<IBreadcrumbProps>('breadcrumb', props);
    onMounted(() => {
      const items = breadcrumb.value.querySelectorAll('.mmq-breadcrumb-item');
      if (items.length) {
        items[items.length - 1].setAttribute('aria-current', 'page');
      }
    });
    return {
      breadcrumb
    };
  }
});
</script>

<style lang="scss" scoped>
.mmq-breadcrumb {
  font-size: 14px;
  line-height: 1;
}
</style>
