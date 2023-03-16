<template>
  <div class="topNavAndBanner">
   <topNav />
    <div class="banner">
      <h1>Mq-UI</h1>
      <h2>基于VUE3的UI框架</h2>
      <p class="actions">
        <a href="https://github.com/tgbf2674/vue3-ui">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
  <div class="features">
    <ul>
      <li>
        <svg class="icon">
          <use xlink:href="#icon-Vue"></use>
        </svg>
        <h3>基于 Vue 3</h3>
        <p>都已经2022年了，玩玩vue3吧，求求了，再不玩vue4都出了</p>
      </li>
      <li>
        <svg class="icon">
          <use xlink:href="#icon-ts"></use>
        </svg>
        <h3>基于 TypeScript </h3>
        <p>类型明确时代码是TypeScript,不明确的时候就是AnyScript</p>
      </li>
      <li>
        <svg class="icon">
          <use xlink:href="#icon-LC_icon_light_line"></use>
        </svg>
        <h3>代码易懂</h3>
        <p>每个组件的源代码都是新手的胡思乱想，所以新手也能明白人在干嘛</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import topNav from '../components/topNav.vue';
import bgAnimation from '../utils/bgAnimation';
import {onUnmounted} from 'vue';

export default {
name: "Home",
  components: {
  topNav
  },
  setup() {
    const App = document.querySelector('#app')
    const canvas = document.createElement('canvas')
    canvas.id = 'canvas'
    App!.appendChild(canvas)
    bgAnimation()
    onUnmounted(() => {
      App!.removeChild(canvas)
    })
  }
}
</script>

<style lang="scss" scoped>
$green: #0081ff;
$border-radius: 4px;
$color: #fff;
.topNavAndBanner {
  height: 34%;
  width: 100%;
  top: 0;
  position: absolute;
  background: linear-gradient(145deg, #0081ff 0%, #1cbbb4 100%);
  clip-path: ellipse(80% 60% at 50% 40%);
}
.features {
  margin: 64px auto;
  padding: 0 16px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  @media (min-width: 800px) {
    width: 800px;
    >ul {
      >li {
        width: 50%;
      }
    }
  }
  @media (min-width: 1200px) {
    width: 1200px;
    >ul {
      >li {
        width: 33.3333%;
      }
    }
  }
  >ul {
    display: flex;
    flex-wrap: wrap;
    >li {
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      >svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      >h3 {
        grid-area: title;
        font-size: 28px;
      }
      >p {
        grid-area: text
      }
    }
  }
}
.banner {
  color: $color;
  position: absolute;
  left: 50%;
  top: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  flex-direction: column;
  >.actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: $green;
      color: white;
      display: inline-block;
      padding: 8px 24px;
      border-radius: $border-radius;
      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>
