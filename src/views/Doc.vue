<template>
  <div class="layout">
    <topNav :toggleMenuButtonVisible="true" class="nav" />
    <div class="content">
      <aside v-if="menuVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <span>基础</span>
          <li><router-link to="/doc/container">container 组件</router-link></li>
          <li><router-link to="/doc/grid">grid 组件</router-link></li>
          <li><router-link to="/doc/icon">icon 组件</router-link></li>
          <li><router-link to="/doc/button">Button 组件</router-link></li>
          <li><router-link to="/doc/link">link 组件</router-link></li>
          <li><router-link to="/doc/scrollbar">scrollbar 组件</router-link></li>
          <span>表单</span>
          <li><router-link to="/doc/radio">radio 组件</router-link></li>
          <li><router-link to="/doc/input">input 组件</router-link></li>
          <li><router-link to="/doc/dropdown">dropdown 组件</router-link></li>
          <li><router-link to="/doc/switch">Switch 组件</router-link></li>
          <span>数据</span>
          <li><router-link to="/doc/tag">tag 组件</router-link></li>
          <li><router-link to="/doc/badge">badge 组件</router-link></li>
          <li><router-link to="/doc/empty">empty 组件</router-link></li>
          <li><router-link to="/doc/result">result 组件</router-link></li>
          <li><router-link to="/doc/skeleton">skeleton 组件</router-link></li>
          <span>提示</span>
          <li><router-link to="/doc/loading">loading 组件</router-link></li>
          <li><router-link to="/doc/message">message 组件</router-link></li>
          <span>导航</span>
          <li><router-link to="/doc/tabs">Tabs 组件</router-link></li>
          <li><router-link to="/doc/sticky">sticky 组件</router-link></li>
          <li><router-link to="/doc/breadcrumb">breadcrumb 组件</router-link></li>
          <span>其他</span>
          <li><router-link to="/doc/dialog">Dialog 组件</router-link></li>
          <li><router-link to="/doc/card">card 组件</router-link></li>
          <li><router-link to="/doc/collapse">collapse 组件</router-link></li>
          <li><router-link to="/doc/spread">spread 组件</router-link></li>
          <li><router-link to="/doc/tooltip">tooltip 组件</router-link></li>
          <li><router-link to="/doc/swiper">swiper 组件</router-link></li>
          <li><router-link to="/doc/image">image 组件</router-link></li>
        </ol>
      </aside>
      <main>
        <router-view></router-view>
      </main>
    </div>
    </div>
</template>

<script lang="ts">
import topNav from '../components/topNav.vue';
import {inject, Ref} from 'vue';
export default {
name: "Doc",
  components: {
  topNav
  },
  setup(){
    const menuVisible = inject<Ref<boolean>>('menuVisible')
    return {
      menuVisible
    }
  }
}
</script>

<style lang="scss" scoped>
.layout ::v-deep(.topNav){
  box-shadow: 0 2px 8px #f0f1f2;
}
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
    color: #333;
    background: #ffffff;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 256px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
    background: white;
  }
}
aside {
  background: #ffffff;
  width: 250px;
  padding: 70px 0 16px 0;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  line-height: 40px;
  border-right: 1px solid #e8e8e8;
  z-index: 10;
  overflow-y: auto;
  overflow-x: hidden;
  > h2 {
    margin-bottom: 4px;
    padding: 0 16px;
  }

  > ol {
    > span {
      margin-top: 10px;
      display: block;
      padding-left: 16px;
      color: rgba(0, 0, 0, 0.35);
      font-size: 12px;
      line-height: 20px;
      font-weight: 500;
      cursor: default;
    }
    > li {
      > a {
        display: block;
        padding: 4px 16px;
        text-decoration: none;
        font-size: 14px;
      }
      a:hover{
        background: rgba(0,0,0,.12);
      }
      .router-link-active {
        border-left: 4px solid #3f51b5;
        background: #323232;
        color: white;
        font-weight: 500;
        transition: all .3s linear;
        padding-left: 32px!important;
        &:hover {
          background: #323232 !important;
        }
      }
    }
  }
}
  main {
    overflow: auto;
}
</style>
