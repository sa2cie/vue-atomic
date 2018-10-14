/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs, text } from '@storybook/addon-knobs'
import { withNotes } from '@storybook/addon-notes'

// StoryComponent
import Home from '@/components/Templates/Home'

// 基本情報
storiesOf('Templates/Home', module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add(
    '基本情報',
    withNotes(
      `
      sample text
    `
    )(() => {
      return {
        components: { Home },
        template: `<Home />`,
        propsDescription: {
          height: '画像の縦幅'
        }
      }
    })
  )

// Example
storiesOf('Templates/Home', module).add('Normal', () => ({
  components: { Home },
  template:
    '<Home url="https://jungle-time.com/wp-content/uploads/2018/03/red-fox-2230730_1280.jpg" alt="Fox Image" width="400" height="240" />',
  methods: { action: action('clicked') }
}))
