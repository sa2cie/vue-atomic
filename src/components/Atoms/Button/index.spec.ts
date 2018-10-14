import { shallowMount } from '@vue/test-utils'
// import sinon from 'sinon'
import Button from './index.vue'

describe('Button', () => {
  describe('props', () => {
    // TODO
    it('typeが正しく渡っている', () => {
      const type = 'primary'
      const wrapper = shallowMount(Button, {
        propsData: {
          type
        }
      })
      expect(wrapper.props().type).toBe(type)
    }),
    // TODO
    it('disabledが正しく渡っている', () => {
      const disabled = true
      const wrapper = shallowMount(Button, {
        propsData: {
          disabled
        }
      })
      expect(wrapper.props().disabled).toBe(disabled)
    })
  })

  describe('slot', () => {
    // TODO
    it('デフォルトスロットに渡した内容が正しく表示される', () => {
      const msg = 'クリックしてください'
      const wrapper = shallowMount(Button, {
        slots: {
          default: msg
        }
      })
      expect(wrapper.text()).toMatch(msg)
    })
  })
})
