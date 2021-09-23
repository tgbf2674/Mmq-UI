<demo>
常规用法
</demo>
<template>
  <scrollbar height="400px">
    <p class="item" v-for="item in 20">{{item}}</p>
  </scrollbar>
</template>

<script lang="ts">
import scrollbar from '../../../lib/Scrollbar/Scrollbar.vue'
export default {
  name: 'Scrollbar1.demo',
  components:{scrollbar}
}
</script>

<style lang="scss" scoped>
.item{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: #ecf5ff;
  color: #409eff;
}
</style>
