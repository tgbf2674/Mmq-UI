<demo>
支持偏移
</demo>
<template>
  <Grid :gutter="20">
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
  <Grid :gutter="20">
    <GridCol :span="6" :offset="6">
      <div class="demo1"></div>
    </GridCol>
    <GridCol :span="6" :offset="12">
      <div class="demo2"></div>
    </GridCol>
  </Grid>
  <Grid :gutter="20">
    <GridCol :span="12">
      <div class="demo1"></div>
    </GridCol>
    <GridCol :span="3">
      <div class="demo1"></div>
    </GridCol>
  </Grid>
  <Grid :gutter="20">
    <GridCol :span="6">
      <div class="demo1"></div>
    </GridCol>
    <GridCol :span="2">
      <div class="demo2"></div>
    </GridCol>
    <GridCol :span="3" :offset="7">
      <div class="demo1"></div>
    </GridCol>
    <GridCol :span="4" :offset="7">
      <div class="demo2"></div>
    </GridCol>
  </Grid>
</template>

<script lang="ts">
import Grid from "../../../lib/Grid.vue";
import GridCol from "../../../lib/GridCol.vue";
export default {
  components: {Grid, GridCol},
  setup() {
  }
};
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
