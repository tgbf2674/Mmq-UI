<demo>
常规用法
</demo>
<template>
  <div>
    <Collapse v-model:activeName="activeName">
      <CollapseItem name="1">
        <template #header>标题1</template>
        <template #body>内容1</template>
      </CollapseItem>
      <CollapseItem name="2" disabled>
        <template #header>标题2</template>
        <template #body>内容2</template>
      </CollapseItem>
      <CollapseItem name="3">
        <template #header>标题3</template>
        <template #body>内容3</template>
      </CollapseItem>
    </Collapse>
  </div>
</template>

<script lang="ts">
import Collapse from '../../../lib/Collapse.vue'
import CollapseItem from '../../../lib/CollapseItem.vue'
import {ref} from 'vue';
export default {
name: "Collapse1.demo",
  components: {Collapse,CollapseItem},
  setup(){
  const activeName = ref(['1'])
    return {
    activeName
    }
  }
}
</script>

