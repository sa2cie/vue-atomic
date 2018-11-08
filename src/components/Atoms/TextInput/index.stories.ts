/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import VueInfoAddon, { withInfo } from 'storybook-addon-vue-info'
import { withKnobs, text, boolean } from '@storybook/addon-knobs/vue'
import { withNotes } from '@storybook/addon-notes'

// StoryComponent
import TextInput from '@/components/Atoms/TextInput'

// Usage
storiesOf('Atoms/TextInput', module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add(
    'Usage',
    withNotes(
      `
      sample text
      `
    )(() => {
      const name = text('name', 'name')
      const value = text('value', '')
      const placeholder = text('placeholder', 'テキストを入力してください')
      return {
        components: { TextInput },
        methods: { 
          changeAction: action('input-change'),
          submitAction: action('input-submit')
        },
        template: `<TextInput value="${value}" name="${name}" placeholder="${placeholder}" :onChange="changeAction" :onSubmit="submitAction" />`,
        propsDescription: {
          value: 'value属性',
          name: 'name属性',
          placeholder: 'placeholder属性',
          onChange: 'value値が変わった時に発生するイベント',
          onSubmit: 'フォームフォーカス中にEnterをクリックした時発生するイベント',
          withIcon: 'アイコンをinput内に表示する場合はtrueにして余白を作る',
        }
      }
    })
  )

// Example
