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
  test('点击选各种',async () => {
    const wrapper = mount(Radio, {
      props: {
        options: [
          {label: '苹果', value: 'Apple'},
          {label: '梨', value: 'Pear'},
          {label: '橘子', value: 'Orange'}
        ],
        modelValue: ''
      }
    })
    await wrapper.find('input').trigger('click')
    expect(wrapper.find('input').attributes().value).toBe('Apple')
  })
  test('点击选各种',async () => {
    const wrapper = mount(Radio, {
      props: {
        options: [
          {label: '苹果', value: 'Apple'},
          {label: '梨', value: 'Pear'},
          {label: '橘子', value: 'Orange'}
        ],
        modelValue: 'Apple',
        canCancel: true
      }
    })
    await wrapper.find('input').trigger('click')
    expect(wrapper.find('input').attributes().value).toBe('')
  })
})
