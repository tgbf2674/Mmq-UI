<template>
  <div class="mmqIconList">
    <div class="mmqIconListWrapper" v-for="(name,index) in icons" :key="index">
      <component :is="name" class="icon" :index="index"></component>
      <div class="name">{{ name }}</div>
    </div>
  </div>
</template>

<script>
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import {reactive, ref, toRefs} from 'vue'

export default {
  components: {
    ...ElementPlusIconsVue
  },
  name: 'Naruto-Icon.vue',
  setup() {
    const getData = () => {
      let icons = []
      for (const name in ElementPlusIconsVue) {
        icons.push(name)
      }
      return icons
    }
    const iconList = reactive({
      icons: getData()
    })
    return {
      ...toRefs(iconList)
    }
  }
}
</script>

<style lang="scss" scoped>
.mmqIconList {
  display: flex;
  flex-wrap: wrap;
  .mmqIconListWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 8rem;
    margin: 14px 0;
    .icon {
      font-size: 1.5rem;
      text-align: center;
      margin-bottom: 10px;
    }
    .name {
      text-align: center;
      font-size: 1rem;
    }
  }
}
</style>
