import {mount} from '@vue/test-utils'
import {describe, test, expect} from 'vitest'
import Button from '../lib/Button.vue'
import Result from '../lib/Result/Result.vue'
describe('Empty组件', () => {
  test('基本使用', () => {
    const Component = {
      template: `
        <Result icon="success" title="成功提示" subTitle="请根据提示进行操作">
        <template #extra>
          <Button level="main">返回</Button>
        </template>
        </Result>
  `,
      components: {Result, Button}
    }
    const wrapper = mount(Component)
    expect(wrapper.find('.icon-success').exists()).toBe(true)
  })
  test('默认使用', () => {
    const Component = {
      template: `
        <Result title="成功提示" subTitle="请根据提示进行操作">
        <template #extra>
          <Button level="main">返回</Button>
        </template>
        </Result>
  `,
      components: {Result, Button}
    }
    const wrapper = mount(Component)
    expect(wrapper.find('.icon-info').exists()).toBe(true)
  })
  test('自定义内容', () => {
    const Component = {
      template: `
        <Result>
        <template #icon>
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" alt="" />
        </template>
        <template #title>
          <p class="woaini">woaini</p>
        </template>
        <template #subTitle>
          <p class="niaiwo">niaiwo</p>
        </template>
        <template #extra>
          <Button level="main">返回</Button>
        </template>
        </Result>
  `,
      components: {Result, Button}
    }
    const wrapper = mount(Component)
    expect(wrapper.find('.woaini').exists()).toBe(true)
  })
})
