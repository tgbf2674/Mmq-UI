<demo>
常规用法
</demo>
<template>
  <Grid>
    <GridCol :span="24">
      <div class="demo1"></div>
    </GridCol>
  </Grid>
  <Grid>
    <GridCol :span="16">
      <div class="demo1"></div>
    </GridCol>
    <GridCol :span="8">
      <div class="demo2"></div>
    </GridCol>
    <GridCol :span="4">
      <div class="demo3"></div>
    </GridCol>
  </Grid>
  <Grid>
    <GridCol :span="6">
      <div class="demo1"></div>
    </GridCol>
    <GridCol :span="6">
      <div class="demo2"></div>
    </GridCol>
    <GridCol :span="6">
      <div class="demo1"></div>
    </GridCol>
    <GridCol :span="6">
      <div class="demo2"></div>
    </GridCol>
  </Grid>
</template>

<script lang="ts">
import Grid from '../../../lib/Grid.vue'
import GridCol from '../../../lib/GridCol.vue'
export default {
name: "Grid1.demo",
  components: {Grid, GridCol}
}
</script>

<style lang="scss" scoped>
$bg: #2b85e4;
@mixin col-style($bgLevel:0) {
  display: -moz-box;
  border-radius: 5px;
  height: 30px;
  margin-bottom: 20px;
  background: lighten($bg, $bgLevel);;
}
.demo1 {
  @include col-style()
}
.demo2 {
  @include col-style(20)
}
.demo3 {
  @include col-style(30)
}
</style>
