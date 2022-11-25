import {mount} from '@vue/test-utils'
import {describe, test, expect} from 'vitest'
import Tag from '../lib/Tag.vue'

describe('tag组件', () => {
  test('基本用法', () => {
    const wrapper = mount(Tag, {
      props: {
        name: '标签一',
        type: 'success'
      }
    })
    expect(wrapper.classes('mmq-tag-success')).toBe(true)
  })
  test('可移除标签按钮', async () => {
    const wrapper = mount(Tag, {
      props: {
        name: '标签二',
        type: 'success',
        canClose: true
      }
    })
    await wrapper.find('.close').trigger('click')
    expect(wrapper.find('.close').exists()).toBe(true)
  })
})
