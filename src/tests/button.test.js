import Button from '../lib/Button.vue'
import ButtonGroup from '../lib/ButtonGroup.vue'
import {mount} from '@vue/test-utils'
import {describe, expect, test} from 'vitest'
import {provide} from 'vue'

describe('button', () => {
  test('存在', () => {
    const wrapper = mount(Button)
    expect(wrapper.classes()).to.exist
  })
  test('可以设置disabled', () => {
    const wrapper = mount(Button, {
      props: {
        disable: true
      }
    })
    expect(wrapper.attributes('disable')).toBe('true')
  })
  test('可以设置主题', () => {
    const wrapper = mount(Button, {
      props: {
        theme: 'link'
      }
    })
    expect(wrapper.classes('mmq-theme-link')).toBe(true)
  })
  test('可以设置Loading', () => {
    const wrapper = mount(Button, {
      props: {
        loading: true
      }
    })
    expect(wrapper.find('span').exists() &&wrapper.find('span').classes('mmq-loadingIndicator')).toBe(true)
  })
  test('可以设置按钮颜色', () => {
    const wrapper = mount(Button, {
      props: {
        level: 'main'
      }
    })
    expect(wrapper.classes('mmq-level-main')).toBe(true)
  })
  test('可以设置按钮大小', async () => {
    const wrapper = mount(Button, {
      props: {
        size: 'big'
      }
    })
    await expect(wrapper.classes('mmq-size-big')).toBe(true)
  })
  test('可以设置原型按钮', () => {
    const wrapper = mount(Button, {
      props: {
        circle: true
      }
    })
    expect(wrapper.classes('isCircle')).toBe(true)
  })
  test('可以设置按钮圆角', () => {
    const wrapper = mount(Button, {
      props: {
        round: true
      }
    })
    expect(wrapper.classes('isRound')).toBe(true)
  })
})

describe('buttonGroup', () => {
  test('按钮组可以设置内部按钮大小', () => {
    const Component = {
      template: `
        <ButtonGroup size="big" level="danger">
        <Button> ← 坐</Button>
        <Button> → 右</Button>
        </ButtonGroup>
  `,
      components: {ButtonGroup, Button}
    }
    const wrapper = mount(Component)
    expect(wrapper.findComponent(Button).classes('mmq-size-big') && wrapper.findComponent(Button).classes('mmq-level-danger')).toBe(true)
  })
})
