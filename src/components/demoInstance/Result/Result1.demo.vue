<demo>
常规用法
</demo>
<template>
  <Grid>
    <GridCol :span="12" >
      <Result icon="success" title="成功提示" subTitle="请根据提示进行操作">
        <template #extra>
          <Button level="main">返回</Button>
        </template>
      </Result>
    </GridCol>
    <GridCol :span="12" >
      <Result icon="warning" title="警告提示" subTitle="请根据提示进行操作">
        <template #extra>
          <Button level="main">返回</Button>
        </template>
      </Result>
    </GridCol>
    <GridCol :span="12" >
      <Result icon="error" title="错误提示" subTitle="请根据提示进行操作">
        <template #extra>
          <Button level="main">返回</Button>
        </template>
      </Result>
    </GridCol>
    <GridCol :span="12">
      <Result icon="info" title="信息提示" subTitle="请根据提示进行操作">
        <template #extra>
          <Button level="main">返回</Button>
        </template>
      </Result>
    </GridCol>
  </Grid>
</template>

<script lang="ts">
import Result from '../../../lib/Result/Result.vue'
import Grid from '../../../lib/Grid.vue'
import GridCol from '../../../lib/GridCol.vue'
import Button from '../../../lib/Button.vue'
export default {
  name: 'Result1.demo',
  components: {Result,Grid,GridCol,Button}
}
</script>

<style scoped>

</style>
