import {mount} from '@vue/test-utils'
import {describe, test, expect} from 'vitest'
import Icon from '../lib/Icon.vue';
describe('Icon组件', () => {
  test('基本使用', async () => {
    const Component = {
      template: `
        <Icon name="icon-user" fill="rgb(24,144,255)" font-size="20"/>
  `,
      components: {Icon},
    }
    const wrapper = mount(Component)
    expect(wrapper.find('.mmq-icon').exists()).toBe(true)
  })
})
