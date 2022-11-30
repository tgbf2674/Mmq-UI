import {mount} from '@vue/test-utils'
import {describe, test, expect} from 'vitest'
import Loading from '../lib/Loading.vue'
import Switch from '../lib/Switch.vue'
describe('Loading组件', () => {
  test('基本使用', async () => {
    const Component = {
      template: `
        <div>
          <Switch v-model:value="loading"></Switch>
          <Loading :loading="loading" text="正在加载..."></Loading>
        </div>
  `,
      components: {Switch, Loading},
      data() {
        return {
          loading: false
        }
      }
    }
    const wrapper = mount(Component)
    await wrapper.find('.mmq-switch').trigger('click')
    expect(wrapper.findComponent({name: 'MqLoading'}).props().loading).toBe(true)
  })
})
