import {mount} from '@vue/test-utils'
import {describe, test, expect} from 'vitest'
import Tooltip from '../lib/Tooltip.vue'
import Button from '../lib/Button.vue'
describe('Tooltip组件', () => {
  test('基本使用', async () => {
    const Component = {
      template: `
        <Tooltip content="我是出现在右边的文字" direction="right">
        <Button>右边</Button>
        </Tooltip>
  `,
      components: {Tooltip, Button}
    }
    const wrapper = mount(Component)
    expect(wrapper.find('.tooltip').exists()).toBe(true)
  })
  test('切换主题', async () => {
    const Component = {
      template: `
        <Tooltip content="我是出现在右边的文字" effect="light" direction="right">
        <Button>右边</Button>
        </Tooltip>
  `,
      components: {Tooltip, Button}
    }
    const wrapper = mount(Component)
    expect(wrapper.find('.tooltipText').element.style.background).toBe('#fff')
  })
})
