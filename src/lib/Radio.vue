<template>
  <span class="mmq-radio-wrapper" :class="{vertical}" v-for="item in options" :key="item.value">
    <label class="mmq-radio">
      <span class="mmq-radio-input">
        <span class="mmq-radio-inner" :class="{'is-checked' :item.value ===modelValue}"></span>
        <input type="radio" @click="select(item.value)" :value="value" class="mmq-radio-original">
      </span>
      <span class="mmq-radio-label" :class="{'is-checked' :item.value ===modelValue}"> {{ item.label }}</span>
    </label>
  </span>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';

export default defineComponent({
  name: 'MqRadio',
  props: {
    options: {
      type: Array,
      required: true
    },
    modelValue: {
      type: String,
      required: true
    },
    vertical: {
      type: Boolean,
      default: false
    },
    canCancel: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const value = ref(props.modelValue)
    const select = (val: string) => {
      value.value = val
      if (value.value === props.modelValue) {
        if (props.canCancel) value.value = '';
      }
      context.emit('update:modelValue', value.value);
    };
    return {select, value};
  }
});
</script>

<style lang="scss" scoped>
@import "./src/style/theme.scss";

.mmq-radio-wrapper {
  &.vertical {
    display: block;
  }

  .mmq-radio {
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

    .mmq-radio-input {
      white-space: nowrap;
      cursor: pointer;
      outline: none;
      display: inline-block;
      font-size: 14px;
      line-height: 1;
      position: relative;
      vertical-align: middle;

      .mmq-radio-inner {
        border: 1px solid $mmq-border-color;
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
          border-color: $mmq-type-primary;
          background-color: rgb(64, 158, 255);

          &:after {
            transform: translate(-50%, -50%) scale(1);
          }
        }
      }

      .mmq-radio-original {
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

  .mmq-radio-label {
    font-size: 14px;
    padding-left: 10px;

    &.is-checked {
      color: $mmq-type-primary-dark;
    }
  }
}
</style>
