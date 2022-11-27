import {mount} from '@vue/test-utils'
import {describe, test, expect} from 'vitest'
import Container from '../lib/Container/Container.vue'
import Header from '../lib/Container/Header.vue'
import Aside from '../lib/Container/Aside.vue'
import Main from '../lib/Container/Main.vue'
import Footer from '../lib/Container/Footer.vue'

describe('布局组件', () => {
  test('基本使用', async () => {
    const Component = {
      template: `
        <Container>
        <Header height="200px" class="header">Header</Header>
        <Main class="main">Main</Main>
        </Container>
  `,
      components: {Container, Header, Main}
    }
    const wrapper = mount(Component)
    expect(wrapper.classes('mmq-container')).toBe(true)
  })
  test('水平布局', async () => {
    const Component = {
      template: `
        <Container direction="horizontal">
        <Aside class="aside" width="200">Aside</Aside>
        <Main class="main">Main</Main>
        </Container>
  `,
      components: {Container, Header, Main, Aside}
    }
    const wrapper = mount(Component)
    expect(wrapper.classes('is-vertical')).toBe(false)
  })
  test('Footer布局', async () => {
    const Component = {
      template: `
        <Container>
        <Header class="header">header</Header>
        <Container direction="horizontal">
          <Aside class="aside">aside</Aside>
          <container>
            <Main class="main">main</Main>
            <Footer height="60" class="footer">footer</Footer>
          </container>
        </Container>
        </Container>
  `,
      components: {Container, Header, Main, Aside, Footer}
    }
    const wrapper = mount(Component)
    expect(wrapper.find('.mmq-footer').exists()).toBe(true)
  })
})
