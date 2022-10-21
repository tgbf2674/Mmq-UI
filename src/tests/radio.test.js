import {mount} from '@vue/test-utils'
import {describe, test, expect} from 'vitest'
import Radio from '../lib/Radio.vue'
describe('Radio', () => {
  test('存在', () => {
    const wrapper = mount(Radio, {
      props: {
        options: ['1', '2', '3'],
        modelValue: '1'
      }
    })
    expect(wrapper.exists()).toBe(true)
  })
  test('点击选各种', async () => {
    const wrapper = mount(Radio, {
      props: {
        options: ['1', '2', '3'],
        modelValue: '1'
      }
    })
    await wrapper.find('.mmq-radio-original').trigger('click')
    expect(wrapper.props('modelValue')).toBe('1')
  })
})
