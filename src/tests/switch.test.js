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
  test('设置默认选中', () => {
    const wrapper = mount(MqSwitch, {
      props: {
        modelValue: false
      }
    })
    expect(wrapper.exists()).toBe(true)
  })
})
