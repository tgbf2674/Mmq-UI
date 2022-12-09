import {mount} from '@vue/test-utils'
import {describe, test, expect} from 'vitest'
import Tooltip from '../lib/Tooltip.vue'
describe('Tooltip组件', () => {
  test('基本使用', async () => {
    const Component = {
      template: `
        <Tooltip content="我是出现在右边的文字" direction="right">
        <Button>右边</Button>
        </Tooltip>
  `,
      components: {Tooltip}
    }
    const wrapper = mount(Component)
    expect(wrapper.find('.tooltip').exists()).toBe(true)
  })
})
