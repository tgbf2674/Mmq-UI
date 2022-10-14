<demo>
 常规使用
</demo>
<template>
  <MqPagination v-model="current" layout="prev, next" @changePage="changePage" :total="80" :page="1" position="center"></MqPagination>
  {{ current }}
</template>

<script lang="ts">
import MqPagination from '../../../lib/MqPagination.vue'
import {reactive, ref} from 'vue';
export default {
  name: 'Pagination1.demo',
  components: {
    MqPagination
  },
  setup () {
    const params = reactive({
      page: 1,
      pageSize: 10
    })
    const current = ref(1)
    const changePage = (page: number) => {
      params.page = page
      console.log(params)
    }
    return { changePage, params, current }
  }
}
</script>

<style scoped>

</style>
