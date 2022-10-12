<demo>
 带有背景色的分页
</demo>
<template>
  <MqPagination background v-model="current" @changePage="changePage" :page-size="10" :total="80" :page="1" position="center"></MqPagination>
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
