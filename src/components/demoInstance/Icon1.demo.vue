<demo>
常规用法
</demo>
<template>
  <Icon name="icon-user" fill="rgb(24,144,255)" font-size="20"/>
</template>

<script lang="ts">
import Icon from "../../lib/Icon.vue";
import {ref} from 'vue';
export default {
  components: {Icon},
  setup() {
    const currentTab = ref('first');
    return {currentTab};
  }
};
</script>
