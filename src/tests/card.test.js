import {mount} from '@vue/test-utils'
import {describe, test, expect} from 'vitest'
import Card from '../lib/Card.vue'
describe('Card组件', () => {
  test('基本使用', async () => {
    const Component = {
      template: `
        <Card :list-data="[1,2,3,4]">
        <template #title>
          <span>我是标题</span>
        </template>
        </Card>
  `,
      components: {Card}
    }
    const wrapper = mount(Component)
    expect(wrapper.find('.mmq-card-content').exists()).toBe(true)
  })
  test('是否带有阴影效果', async () => {
    const Component = {
      template: `
        <Card shadow="never" :list-data="[1,2,3,4]">
        <template #title>
          <span>我是标题</span>
        </template>
        </Card>
  `,
      components: {Card}
    }
    const wrapper = mount(Component)
    expect(wrapper.find('.mmq-card-shadow-never').exists()).toBe(true)
  })
})
