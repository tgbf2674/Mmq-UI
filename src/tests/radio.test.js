import {mount} from '@vue/test-utils'
import {describe, test, expect} from 'vitest'
import Radio from '../lib/Radio.vue'
describe('Radio', () => {
  test('存在', () => {
    const wrapper = mount(Radio, {
      props: {
        modelValue: false
      }
    })
    expect(wrapper.exists()).toBe(true)
  })
})
