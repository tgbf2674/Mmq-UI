<template>
  <div class="gulu-dropdown">
    <div class="gulu-dropdown-link" @mouseenter="showDropdownItem" @mouseleave="hiddenDropdownItem">
      <slot></slot>
      <slot name="dropdown" v-if="false"></slot>
      <ul v-show="dropdownItemVisible">
        <li @click="selectedItem" v-for="item in dropdowns" :key="item" class="dropdown-item">{{ item }}</li>
      </ul>
    </div>
  </div>
  {{selected}}
</template>

<script lang="ts">
import {ref, PropType} from 'vue';

export default {
  name: 'Dropdown',
  setup(props: PropType<any>, context:any) {
    const selected = ref('请选择')
    const dropdowns = context.slots.dropdown().map((item: any) => item.children);
    const dropdownItemVisible = ref(false);
    const showDropdownItem = () => dropdownItemVisible.value = true;
    const hiddenDropdownItem = () => dropdownItemVisible.value = false;
    const selectedItem = (event: any)=>{
      selected.value = event.target.innerText
    }
    return {dropdowns, dropdownItemVisible, showDropdownItem, hiddenDropdownItem,selectedItem,selected};
  }
};
</script>

<style lang="scss" scoped>
@import "./src/style/theme.scss";

.gulu-dropdown-link {
  cursor: pointer;
  color: #409eff;

  svg {
    margin-left: 5px;
    fill: #409eff;
  }
}

.gulu-dropdown {
  display: inline-block;
  position: relative;
  color: #606266;
  font-size: 14px;

  ul {
    transform-origin: center top 0;
    z-index: 2029;
    position: absolute;
    top: 20px;
    left: 0;
    padding: 10px 0;
    margin: 5px 0;
    background-color: #fff;
    border: 1px solid #ebeef5;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);

    .dropdown-item {
      list-style: none;
      line-height: 36px;
      padding: 0 20px;
      margin: 0;
      font-size: 14px;
      color: #606266;
      cursor: pointer;
      outline: none;
      white-space: nowrap;

      &:hover {
        background-color: #ecf5ff;
        color: #66b1ff;
      }
    }
  }
}

</style>
