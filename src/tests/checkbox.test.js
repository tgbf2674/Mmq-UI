import {mount} from '@vue/test-utils'
import {describe, test, expect} from 'vitest'
import Checkbox from '../lib/Checkbox.vue'

describe('checkbox', () => {
  test('存在', async () => {
    const Component = {
      template: `
        <checkbox v-model="value" label="西瓜"></checkbox>
        <checkbox v-model="value1" label="葡萄"></checkbox>
        <checkbox v-model="value2" label="车厘子"></checkbox>
        <checkbox v-model="value3" label="菠萝" disabled></checkbox>
  `,
      components: {Checkbox},
      data() {
        return {
          value: false,
          value1: false,
          value2:false,
          value3: false
        }
      }
    }
    const wrapper = mount(Component)
    await wrapper.find('.mmq-checkbox-input').trigger('click')
    console.log(wrapper.find('.mmq-checkbox-input').attributes())
    expect(wrapper.find('.mmq-checkbox-input').attributes().value).toBe('西瓜')
  })
})
