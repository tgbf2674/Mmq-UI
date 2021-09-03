<demo>
上下两栏布局
</demo>
<template>
  <div class="wrapper">
  <Container>
    <Header class="header">Header</Header>
    <Main class="main">Main</Main>
  </Container>

  <Container>
    <Header class="header">Header</Header>
    <Main class="main">Main</Main>
    <Footer class="footer">Footer</Footer>
  </Container>

  <Container direction="horizontal">
    <Aside class="aside" width="200px">Aside</Aside>
    <Main class="main">Main</Main>
  </Container>

    <Container>
      <Header class="header">Header</Header>
      <Container direction="horizontal">
        <Aside class="aside" width="200px">Aside</Aside>
        <Main class="main">Main</Main>
      </Container>
    </Container>

    <Container>
      <Header class="header">header</Header>
      <Container direction="horizontal">
        <Aside width="200px" class="aside">aside</Aside>
        <container>
          <Main class="main">main</Main>
          <Footer class="footer">footer</Footer>
        </container>
      </Container>
    </Container>

    <Container direction="horizontal">
      <Aside class="aside" width="200px">Aside</Aside>
      <Container>
        <Header class="header">header</Header>
        <Main class="main">Main</Main>
      </Container>
    </Container>

    <Container direction="horizontal">
      <Aside class="aside" width="200px">aside</Aside>
      <container>
        <Header class="header">header</Header>
        <Main class="main">main</Main>
        <Footer class="footer">Footer</Footer>
      </container>
    </Container>
  </div>
</template>

<script lang="ts">
import Container from '../../../lib/Container/Container.vue'
import Header from '../../../lib/Container/Header.vue'
import Main from '../../../lib/Container/Main.vue'
import Footer from '../../../lib/Container/Footer.vue'
import Aside from '../../../lib/Container/Aside.vue';
export default {
  name: 'Container1.demo',
  components: {Container, Header, Main,Footer,Aside}
}
</script>

<style lang="scss" scoped>
@import "../../../style/theme";
.wrapper {
  >*{
    margin-bottom: 40px;
  }
  .header, .footer {
    background-color: $gulu-container-header;
    text-align: center;
    line-height: 40px;
  }

  .aside {
    background-color: $gulu-container-aside;
    text-align: center;
    line-height: 160px;
  }

  .main {
    background-color: $gulu-container-main;
    line-height: 160px;
    text-align: center;
  }
}
</style>
