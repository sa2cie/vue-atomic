/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

import { action } from '@storybook/addon-actions'
import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs, text, select } from '@storybook/addon-knobs'
import { withNotes } from '@storybook/addon-notes'

// StoryComponent
import Txt from '@/components/Atoms/Txt'

// 基本情報
storiesOf('Atoms/Txt', module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add(
    '基本情報',
    withNotes(
      `
      sample text
    `,
    )(() => {
      const message = text(
        'message',
        `リードテキストリードテキストリードテキストリードテキストリードテキストリードテキスト<br>リードテキスト<br><a href='./'>リンク</a>テキストテキスト`,
      )
      return {
        components: { Txt },
        template: `<Txt message="${message}" />`,
        propsDescription: {
          message: 'リードテキスト※HTMLタグを渡すことができます',
        },
      }
    }),
  )

// Example
// storiesOf('Atoms/Txt', module)
//   .add('Sample', () => ({
//     components: { Txt },
//     template: '<Txt message="テキストテキストテキストテキストテキスト<br>テキストテキストテキストテキストテキストテキスト<br>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"/>',
//   }))
