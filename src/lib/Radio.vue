<template>
  <span class="gulu-radio-wrapper" :class="{vertical}" v-for="item in options" :key="item.value">
    <label class="gulu-radio">
      <span class="gulu-radio-input">
        <span class="gulu-radio-inner" :class="{'is-checked' :item.value ===value}"></span>
        <input type="radio" @click="select" :value="item.value" class="gulu-radio-original">
      </span>
      <span class="gulu-radio-label" :class="{'is-checked' :item.label ===value}"> {{item.label}}</span>
    </label>
  </span>
</template>

<script lang="ts">
export default {
  name: 'Radio',
  props:{
    options:{
      type: Array,
      required: true
    },
    value:{
      type: String,
      required: true
    },
    vertical: {
      type: Boolean,
      default: false
    }
  },
  setup(props,context){
    const select = (e)=>{
      if(e.target.value === props.value){
        return
      }
      context.emit('update:value',e.target.value)
    }
    return {select}
  }
}
</script>

<style lang="scss" scoped>
@import "./src/style/theme.scss";
.gulu-radio-wrapper {
  &.vertical {
    display: block;
  }
  .gulu-radio {
    color: #606266;
    font-weight: 500;
    line-height: 1;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    outline: none;
    font-size: 14px;
    margin-right: 30px;
    -moz-user-select: none;
    -webkit-user-select: none;
    .gulu-radio-input {
      white-space: nowrap;
      cursor: pointer;
      outline: none;
      display: inline-block;
      line-height: 1;
      position: relative;
      vertical-align: middle;
      .gulu-radio-inner {
        border: 1px solid $gulu-border-color;
        border-radius: 100%;
        width: 14px;
        height: 14px;
        background-color: #fff;
        position: relative;
        cursor: pointer;
        display: inline-block;
        box-sizing: border-box;
        &:after {
          width: 4px;
          height: 4px;
          border-radius: 100%;
          background-color: #fff;
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%) scale(0);
          transition: transform .15s ease-in;
        }
        &.is-checked {
          border-color: $gulu-type-primary;
          background-color: rgb(64, 158, 255);
          &:after {
            transform: translate(-50%, -50%) scale(1);
          }
        }
      }
      .gulu-radio-original {
        opacity: 0;
        outline: none;
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: 0;
      }
    }
  }
  .gulu-radio-label {
    font-size: 14px;
    padding-left: 10px;
    &.is-checked {
      color: $gulu-type-primary-dark;
    }
  }
}
</style>
