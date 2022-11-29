import {mount} from '@vue/test-utils'
import {describe, test, expect} from 'vitest'
import Skeleton from '../lib/Skeleton.vue'
import SkeletonItem from '../lib/SkeletonItem.vue'
describe('Skeleton组件', () => {
  test('基本使用', () => {
    const Component = {
      template: `
        <skeleton></skeleton>
  `,
      components: {Skeleton, SkeletonItem}
    }
    const wrapper = mount(Component)
    expect(wrapper.find('.mmq-skeleton-paragraph').exists()).toBe(true)
  })
  test('更多参数', () => {
    const Component = {
      template: `
        <skeleton :rows="5"></skeleton>
  `,
      components: {Skeleton, SkeletonItem}
    }
    const wrapper = mount(Component)
    expect(wrapper.findAll('.mmq-skeleton-paragraph').length).toBe(5)
  })
  test('动画效果', () => {
    const Component = {
      template: `
        <skeleton :rows="5" animated></skeleton>
  `,
      components: {Skeleton, SkeletonItem}
    }
    const wrapper = mount(Component)
    expect(wrapper.find('.is-animated').exists()).toBe(true)
  })
})
