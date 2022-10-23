import {mount} from '@vue/test-utils'
import {describe, test, expect} from 'vitest'
import MqSwitch from '../lib/MqSwitch.vue'
describe('switch', () => {
  test('存在', () => {
    const wrapper = mount(MqSwitch, {
      props: {
        modelValue: false
      }
    })
    expect(wrapper.exists()).toBe(true)
  })
  test('设置开关颜色', () => {
    const wrapper = mount(MqSwitch, {
      props: {
        modelValue: false,
        openColor: 'red',
        closeColor: 'green'
      }
    })
    const wrapper1 = mount(MqSwitch, {
      props: {
        modelValue: true,
        openColor: 'red',
        closeColor: 'green'
      }
    })
    expect(wrapper.find('.mmq-switch-status').element.style.background === 'green').toBe(true)
    expect(wrapper1.find('.mmq-switch-status').element.style.background === 'red').toBe(true)
  })
  test('点击改变开关状态', async () => {
    const wrapper = mount(MqSwitch, {
      props: {
        modelValue: false
      }
    })
    await wrapper.find('.mmq-switch-status').trigger('click')
    expect(wrapper.find('.mmq-switch-open').exists()).toBe(true)
  })
  test('是否展示按钮的文字描述', async () => {
    const wrapper = mount(MqSwitch, {
      props: {
        modelValue: false,
        inlinePrompt: true,
        closeText: 'false',
        openText: 'true'
      }
    })
    expect(wrapper.find('.mmq-switch-text').text()).toBe('false')
  })
  test('禁用状态', async () => {
    const wrapper = mount(MqSwitch, {
      props: {
        modelValue: false,
        disabled: true
      }
    })
    await wrapper.find('.mmq-switch-status').trigger('click')
    expect(wrapper.find('.mmq-switch-close').exists()).toBe(true)
  })
  test('扩展value的类型', async () => {
    const wrapper = mount(MqSwitch, {
      props: {
        modelValue: 1,
        openValue: 100,
        closeValue: 1
      }
    })
    await wrapper.find('.mmq-switch-status').trigger('click')
    expect(wrapper.find('.mmq-switch-close').exists()).toBe(true)
  })
})
