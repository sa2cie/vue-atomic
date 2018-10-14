/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs'
import { withNotes } from '@storybook/addon-notes'

// StoryComponent
import Button from '@/components/Atoms/Button'

// 基本情報
storiesOf('Atoms/Button', module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add(
    '基本情報',
    withNotes(
      `
      これはボタンのコンポーネントです。
      クリック時に何らかの処理を開始する機能をユーザーに提供する最小コンポーネントです。
    `
    )(() => {
      // Knobsの設定
      const label = 'ボタンの種類'
      const options = {
        default: 'default',
        primary: 'primary',
        success: 'success',
        info   : 'info',
        warning: 'warning',
        alert  : 'alert',
      }
      const defaultValue = 'default'
      const type = select(label, options, defaultValue)
      const txt = text('txt', 'ボタンテキスト')
      const disabled = boolean('disabled', false)
      return {
        components: { Button },
        template: `<Button type="${type}" @click.native="action" :disabled="${disabled}">${txt}</Button>`,
        methods: { action: action('button-clicked') },
        propsDescription: {
          disabled: 'disabled属性'
        },
        info: {
          summary: 'aaaaa',
        },
        summary: 'Summary for MyComponent',
      }
    })
  )
