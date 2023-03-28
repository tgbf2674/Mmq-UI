<demo>
自定义间隔符
</demo>
<template>
  <Breadcrumb separatorCustom="ArrowRight">
    <BreadcrumbItem :to="{path: '/'}">首页</BreadcrumbItem>
    <BreadcrumbItem ><a href="">活动管理</a></BreadcrumbItem>
    <BreadcrumbItem >活动列表</BreadcrumbItem>
    <BreadcrumbItem >活动详情</BreadcrumbItem>
  </Breadcrumb>
</template>

<script lang="ts">
import Breadcrumb from '../../../lib/Breadcrumb.vue';
import BreadcrumbItem from '../../../lib/BreadcrumbItem.vue';
export default {
  name: 'Breadcrumb1.demo',
  components:{Breadcrumb,BreadcrumbItem}
}
</script>

<style scoped>

</style>
