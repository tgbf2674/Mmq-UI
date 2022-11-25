import {mount} from '@vue/test-utils'
import {describe, test, expect} from 'vitest'
import Tag from '../lib/Tag.vue'

describe('tag组件', () => {
  test('基本用法', () => {
    const wrapper = mount(Tag, {
      props: {
        type: 'success'
      }
    })
    expect(wrapper.classes('mmq-tag-success')).toBe(true)
  })
})
