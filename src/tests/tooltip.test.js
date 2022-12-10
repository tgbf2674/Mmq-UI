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
    await wrapper.find('.tooltip').trigger('mouseenter')
    expect(wrapper.find('.tooltip').exists()).toBe(true)
  })
  test('鼠标离开', async () => {
    const Component = {
      template: `
        <Tooltip content="我是出现在右边的文字" direction="right">
          <Button>右边</Button>
        </Tooltip>
  `,
      components: {Tooltip, Button}
    }
    const wrapper = mount(Component)
    await wrapper.find('.tooltip').trigger('mouseleave')
    expect(wrapper.find('.tooltipText').element.style.visibility).toBe('hidden')
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
  test('受控模式', async () => {
    const Component = {
      template: `
        <Tooltip v-model:visible="visible" content="我是出现在上边的文字" direction="top">
          <Button @click="visible = !visible">上边</Button>
        </Tooltip>
  `,
      components: {Tooltip, Button},
      data () {
        return {
          visible: false
        }
      },
      methods: {
        handleClick () {
          this.visible = !this.visible
        }
      }
    }
    const wrapper = mount(Component)
    await wrapper.findComponent(Button).trigger('click')
    expect(wrapper.find('.visible').exists()).toBe(true)
  })
  test('受控模式', async () => {
    const Component = {
      template: `
        <Tooltip v-model:visible="visible" content="我是出现在上边的文字" direction="top">
          <Button @click="visible = !visible">上边</Button>
        </Tooltip>
  `,
      components: {Tooltip, Button},
      data () {
        return {
          visible: true
        }
      },
      methods: {
        handleClick () {
          this.visible = !this.visible
        }
      }
    }
    const wrapper = mount(Component)
    await wrapper.findComponent(Button).trigger('click')
    expect(wrapper.find('.visible').exists()).toBe(false)
  })
})
