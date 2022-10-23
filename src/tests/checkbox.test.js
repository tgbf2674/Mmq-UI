import {mount} from '@vue/test-utils'
import {describe, test, expect} from 'vitest'
import Checkbox from '../lib/Checkbox.vue'
import CheckboxGroup from '../lib/CheckboxGroup.vue'
describe('checkbox', () => {
  test('点击选中', async () => {
    const Component = {
      template: `
        <checkbox v-model="value" @change="handleChange" label="西瓜"></checkbox>
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
      },
      methods: {
        handleChange (val) {
          console.log(val)
        }
      }
    }
    const wrapper = mount(Component)
    await wrapper.setData({ value: true })
    expect(wrapper.find('input').element.checked).toBe(true)
  })
  test('checkbox组', async () => {
    const Component = {
      template: `
        <CheckboxGroup v-model="value">
          <checkbox label="haha"></checkbox>
          <checkbox label="xixi"></checkbox>
          <checkbox label="heihei"></checkbox>
          <checkbox label="wuhu"></checkbox>
        </CheckboxGroup>
  `,
      components: {Checkbox, CheckboxGroup},
      data() {
        return {
          value: ['haha', 'xixi'],
        }
      }
    }
    const wrapper = mount(Component)
    await wrapper.setData({ value: ['xixi'] })
    const input = wrapper.find('input')
    input.element.checked = true
    await input.trigger('change')
    expect(wrapper.find('input').element.checked).toBe(true)
  })
  test('支持禁用', async () => {
    const Component = {
      template: `
        <checkbox v-model="value" label="菠萝" disabled></checkbox>
        <checkbox v-model="value" label="西瓜" disabled></checkbox>
  `,
      components: {Checkbox, CheckboxGroup},
      data() {
        return {
          value: false,
        }
      }
    }
    const wrapper = mount(Component)
    expect(wrapper.find('input').element.disabled).toBe(true)
  })
  test('可选项目数量的限制', async () => {
    const Component = {
      template: `
        <CheckboxGroup v-model="checkedCities" :min="1" :max="2">
          <checkbox v-for="city in cities" :key="city" :label="city"></checkbox>
        </CheckboxGroup>
  `,
      components: {Checkbox, CheckboxGroup},
      data() {
        return {
          cities: ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'],
          checkedCities: ['Shanghai', 'Beijing']
        }
      }
    }
    const wrapper = mount(Component)
    expect(wrapper.findAll('input').at(2).element.disabled).toBe(true)
  })
})
