<template>
  <Dropdown>
    <span>下拉菜单<Icon fill="rgb(64,158,255)" name="icon-menudown"/></span>
    <template #dropdown>
      <span>西游记</span>
      <span>三国演义</span>
      <span>红楼梦</span>
      <span>水浒传</span>
    </template>
  </Dropdown>
</template>

<script lang="ts">
import Dropdown from '../../lib/Dropdown.vue';
import Icon from '../../lib/Icon.vue';
export default {
name: "Dropdown1.demo",
  components: {Dropdown,Icon},
}
</script>

<style scoped>

</style>
