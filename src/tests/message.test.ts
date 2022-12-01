import {mount} from '@vue/test-utils'
import {describe, test, expect} from 'vitest'
import Button from '../lib/Button.vue'
import {openMessage} from '../lib/openMessage';
describe('Message组件', () => {
  test('基本使用', async () => {
    const Component = {
      template: `
        <Button @click="open">打开Message</Button>
  `,
      components: {Button},
      methods: {
        open() {
          openMessage({
            message: '我是通过函数调用的message',
            canClose: true,
            type: 'success',
            top: 50,
          })
        }
      }
    }
    const wrapper = mount(Component)
    await wrapper.find('.mmq-button').trigger('click')
    expect(!!document.querySelector('.mmq-messageWrapper')).toBe(true)
  })
})
