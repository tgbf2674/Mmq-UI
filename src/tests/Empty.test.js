import {mount} from '@vue/test-utils'
import {describe, test, expect} from 'vitest'
import Button from '../lib/Button.vue'
import Empty from '../lib/Empty.vue'
describe('Empty组件', () => {
  test('基本使用', async () => {
    const Component = {
      template: `
        <Empty description="描述文字"></Empty>
  `,
      components: {Empty}
    }
    const wrapper = mount(Component)
    expect(wrapper.classes('mmq-empty')).toBe(true)
  })
  test('自定义图片', async () => {
    const Component = {
      template: `
        <Empty image="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"></Empty>
  `,
      components: {Empty}
    }
    const wrapper = mount(Component)
    expect(wrapper.find('img').exists()).toBe(true)
  })
  test('自定义图片大小', async () => {
    const Component = {
      template: `
        <Empty :imageSize="200"></Empty>  `,
      components: {Empty}
    }
    const wrapper = mount(Component)
    expect(wrapper.find('.mmq-empty-image').element.style.width === '200px').toBe(true)
  })
  test('自定义图片底部', async () => {
    const Component = {
      template: `
        <Empty imageSize="200">
        <Button level="main">按钮</Button>
        </Empty>
      `,
      components: {Empty, Button}
    }
    const wrapper = mount(Component)
    expect(wrapper.find('.mmq-empty-bottom').exists()).toBe(true)
  })
})
