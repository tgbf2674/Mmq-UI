<template>
  <teleport to="body">
    <div v-if="loading" class="mmq-loading-wrapper" style="'background-color':background">
      <div class="sk-chase">
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
      </div>
      <div class="textWrapper" v-if="text">
        <span> {{text}}</span>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
export default {
  name: 'MqLoading',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
    },
    background:{
      type: String,
      default: 'hsla(0,0%,100%,.9)'
    }
  },
  setup(){}
}
</script>

<style lang="scss" scoped>
@import "./src/style/theme.scss";
.mmq-loading-wrapper {
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 9999;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .sk-chase {
    width: 40px;
    height: 40px;
    position: absolute;
    animation: sk-chase 2.5s infinite linear both;
  }
  .textWrapper {
    margin-top: 100px;
    color: #777777;
  }
}
.sk-chase-dot {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  animation: sk-chase-dot 2.0s infinite ease-in-out both;
}
.sk-chase-dot:before {
  content: '';
  display: block;
  width: 25%;
  height: 25%;
  background-color: $mmq-type-primary-dark;
  border-radius: 100%;
  animation: sk-chase-dot-before 2.0s infinite ease-in-out both;
}
.sk-chase-dot:nth-child(1) { animation-delay: -1.1s; }
.sk-chase-dot:nth-child(2) { animation-delay: -1.0s; }
.sk-chase-dot:nth-child(3) { animation-delay: -0.9s; }
.sk-chase-dot:nth-child(4) { animation-delay: -0.8s; }
.sk-chase-dot:nth-child(5) { animation-delay: -0.7s; }
.sk-chase-dot:nth-child(6) { animation-delay: -0.6s; }
.sk-chase-dot:nth-child(1):before { animation-delay: -1.1s; }
.sk-chase-dot:nth-child(2):before { animation-delay: -1.0s; }
.sk-chase-dot:nth-child(3):before { animation-delay: -0.9s; }
.sk-chase-dot:nth-child(4):before { animation-delay: -0.8s; }
.sk-chase-dot:nth-child(5):before { animation-delay: -0.7s; }
.sk-chase-dot:nth-child(6):before { animation-delay: -0.6s; }
@keyframes sk-chase {
  100% { transform: rotate(360deg); }
}
@keyframes sk-chase-dot {
  80%, 100% { transform: rotate(360deg); }
}
@keyframes sk-chase-dot-before {
  50% {
    transform: scale(0.4);
  }
  100%, 0% {
    transform: scale(1.0);
  }
}

</style>
