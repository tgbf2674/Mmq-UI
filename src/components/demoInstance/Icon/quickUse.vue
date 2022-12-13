<template>
  <div style="margin: 24px 0">
    <h3>1.安装图标库</h3>
    <div class="InstallWrapper">
      <pre>
        <code>
      <span># NPM</span>
      <span>$ npm install @element-plus/icons-vue</span>
      <span># Yarn</span>
      <span>$ yarn add @element-plus/icons-vue</span>
      <span># pnpm</span>
      <span>$ pnpm install @element-plus/icons-vue</span>
          </code>
      </pre>
    </div>
    <h3>2.注册所有图标</h3>
    <div class="InstallWrapper">
      <pre>
        <code>
          <strong>在main.ts中加入下面的代码,即可直接使用</strong>

          <span>import * as ElementPlusIconsVue from '@element-plus/icons-vue'</span>

          <span>const app = createApp(App)</span>
          <span>for (const [key, component] of Object.entries(ElementPlusIconsVue)) {</span>
            <span>app.component(key, component)</span>
          <span>}</span>
        </code>
      </pre>
    </div>
  </div>
</template>

<script lang="ts">
import MqIcon from '../../../lib/MqIcon.vue';

export default {
  components: {MqIcon},
  setup() {
  }
};
</script>

<style lang="scss" scoped>
.InstallWrapper {
  background-color: #f5f7fa;
  span {
    color: #303133;
  }
}
</style>
