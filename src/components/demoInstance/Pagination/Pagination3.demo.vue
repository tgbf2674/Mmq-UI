<demo>
附加功能
</demo>
<template>
  <MqPagination background v-model="current" :page-sizes="[5, 10, 20, 40]" layout="prev, next, sizes, total" @changePage="changePage" :total="80" :page="1" position="center"></MqPagination>
  {{ current }}
</template>

<script lang="ts">
import MqPagination from '../../../lib/MqPagination.vue'
import {reactive, ref} from 'vue';
export default {
  name: 'Pagination2.demo',
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

