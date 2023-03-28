<demo>
常规用法
</demo>
<template>
  <Dropdown>
    <span>下拉菜单
      <MqIcon color="rgb(64,158,255)">
        <ArrowDown />
      </MqIcon>
    </span>
    <template #dropdown>
      <span>西游记</span>
      <span>三国演义</span>
      <span>红楼梦</span>
      <span>水浒传</span>
    </template>
  </Dropdown>
</template>

<script lang="ts">
import Dropdown from '../../../lib/Dropdown.vue';
export default {
name: "Dropdown1.demo",
  components: {Dropdown},
}
</script>

<style scoped>

</style>
