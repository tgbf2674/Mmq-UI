<template>
  <div>
   <topNav />
    <div class="banner">
      <h1>vue3UI</h1>
      <h2>基于VUE3的框架</h2>
      <p class="actions">
        <a href="https://github.com/tgbf2674/vue3-ui">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import topNav from '../components/topNav.vue';
export default {
name: "Home",
  components: {
  topNav
  }
}
</script>

<style lang="scss" scoped>
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: lightgreen;
  > .actions{
    padding: 8px 0;
    a {
      margin:0 8px;
      background: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 8px;
    }
  }
}
</style>
