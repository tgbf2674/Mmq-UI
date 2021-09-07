<template>
  <div ref="breadcrumb" class="gulu-breadcrumb" aria-label="Breadcrumb" role="navigation">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, provide, ref} from 'vue';

export default defineComponent({
  name: 'Breadcrumb',
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
    const breadcrumb = ref(null);
    provide<IBreadcrumbProps>('breadcrumb', props);
    onMounted(() => {
      const items = breadcrumb.value.querySelectorAll('.gulu-breadcrumb-item');
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
.gulu-breadcrumb {
  font-size: 14px;
  line-height: 1;

}
</style>
