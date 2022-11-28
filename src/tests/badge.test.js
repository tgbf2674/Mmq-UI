import {mount} from '@vue/test-utils'
import {describe, test, expect} from 'vitest'
import Button from '../lib/Button.vue'
import Badge from '../lib/Badge.vue'
describe('badge组件', () => {
  test('基本使用', async () => {
    const Component = {
      template: `
        <Badge :value="12" class="item">
          <Button size="big">评论</Button>
        </Badge>
  `,
      components: {Button, Badge}
    }
    const wrapper = mount(Component)
    expect(wrapper.classes('mmq-badge')).toBe(true)
  })
  test('基本使用2', async () => {
    const Component = {
      template: `
        <Badge value="12" class="item">
          <Button size="big">评论</Button>
        </Badge>
  `,
      components: {Button, Badge}
    }
    const wrapper = mount(Component)
    expect(wrapper.classes('mmq-badge')).toBe(true)
  })
  test('最大值', async () => {
    const Component = {
      template: `
        <Badge :value="200" :max="99" class="item">
          <Button size="big">评论</Button>
        </Badge>
  `,
      components: {Button, Badge}
    }
    const wrapper = mount(Component)
    expect(wrapper.find('.mmq-badge-content').text()).toBe('99+')
  })
  test('小红点', async () => {
    const Component = {
      template: `
        <Badge is-dot :max="10" class="item">
          <Button size="big">回复</Button>
        </Badge>
  `,
      components: {Button, Badge}
    }
    const wrapper = mount(Component)
    expect(wrapper.find('.is-dot').exists()).toBe(true)
  })
})
