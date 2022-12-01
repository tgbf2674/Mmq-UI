import {mount} from '@vue/test-utils'
import {describe, test, expect} from 'vitest'
import Tabs from '../lib/Tabs.vue';
import Tab from '../lib/Tab.vue';
describe('Tabs组件', () => {
  test('基本使用', async () => {
    const Component = {
      template: `
        <Tabs v-model="x">
          <Tab title="导航1">内容1</Tab>
          <Tab title="导航2">内容2</Tab>
        </Tabs>
  `,
      components: {Tabs, Tab},
      data() {
        return {
          x: '导航2'
        }
      }
    }
    const wrapper = mount(Component)
    await wrapper.find('.mmq-tabs-nav-item').trigger('click')
    expect(wrapper.find('.mmq-tabs-nav-item').text()).toBe('导航1')
  })
})
