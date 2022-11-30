import {mount} from '@vue/test-utils'
import {describe, test, expect, vi} from 'vitest'
import Skeleton from '../lib/Skeleton.vue'
import SkeletonItem from '../lib/SkeletonItem.vue'
import Switch from '../lib/Switch.vue'
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
  test('自定义格式', () => {
    const Component = {
      template: `
        <skeleton style="width:240px">
        <template #template>
          <skeletonItem variant="image" style="width: 240px; height: 240px">
          </skeletonItem>
          <div style="padding: 14px">
            <skeletonItem variant="p" style="width: 50%"></skeletonItem>
            <div style="display: flex;align-items: center;justify-content: space-between">
              <skeletonItem variant="text" style="margin-right: 16px"></skeletonItem>
              <skeletonItem variant="text" style="width: 30%"></skeletonItem>
            </div>
          </div>
        </template>
        </skeleton>
  `,
      components: {Skeleton, SkeletonItem}
    }
    const wrapper = mount(Component)
    expect(wrapper.find('.mmq-skeleton-item').exists()).toBe(true)
  })
  test('自定义格式', async () => {
    const Component = {
      template: `
        <div>
        <div style="margin-bottom: 20px;display: flex;flex-direction: column">
        <label style="margin-right: 16px">切换Loading</label>
        <Switch v-model:value="loading"></Switch>
        </div>
        <skeleton style="width:240px" :throttle="500" :loading="loading"  animated>
        <template #template>
          <skeletonItem variant="image" style="width: 240px; height: 240px">
          </skeletonItem>
          <div style="padding: 14px">
            <skeletonItem variant="h3" style="width: 50%"></skeletonItem>
            <div style="display: flex;align-items: center;justify-content: space-between">
              <skeletonItem variant="text" style="margin-right: 16px"></skeletonItem>
              <skeletonItem variant="text" style="width: 30%"></skeletonItem>
            </div>
          </div>
        </template>
        <template>
          <div>
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            />
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
            </div>
          </div>
        </template>
        </skeleton>
        </div>
  `,
      components: {Skeleton, SkeletonItem, Switch},
      data () {
        return {
          loading: false
        }
      }
    }
    const wrapper = mount(Component)
    await wrapper.find('.mmq-switch').trigger('click')
    expect(wrapper.findComponent({ name: 'MqSkeleton' }).props().loading).toBe(true)
  })
})
