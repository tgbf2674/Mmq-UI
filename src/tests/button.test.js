import Button from '../lib/Button.vue'
import {mount} from '@vue/test-utils'
import {describe, expect, test} from 'vitest'

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
})
