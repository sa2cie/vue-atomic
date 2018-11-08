/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import VueInfoAddon, { withInfo } from 'storybook-addon-vue-info'
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs/vue'
import { withNotes } from '@storybook/addon-notes'

// component
import ExitButton from '@/components/Molecules/ExitButton'

// stories - Usage
storiesOf('Molecules/ExitButton', module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add(
    'Usage',
    withNotes(
      `
      これはボタンのコンポーネントです。
      クリック時に何らかの処理を開始する機能をユーザーに提供する最小コンポーネントです。
    `
    )(() => {
      return {
        components: { ExitButton },
        template: `<ExitButton :click="action" />`,
        methods: { action: action('button-clicked') },
        propsDescription: {
          click: 'ボタンを押した時に発生するイベント',
        },
      }
    })
  )
