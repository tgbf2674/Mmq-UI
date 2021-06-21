<template>
  <div>
    <topNav />
    <div class="content">
      <aside>边栏</aside>
      <main>著内容</main>
    </div>
    </div>
</template>

<script lang="ts">
import topNav from '../components/topNav.vue';
export default {
name: "Doc",
  components: {
  topNav
  }
}
</script>

<style scoped>

</style>
