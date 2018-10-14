/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { withNotes } from '@storybook/addon-notes'

// StoryComponent
import Link from '@/components/Atoms/Link'

// 基本情報
storiesOf('Atoms/Link', module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add(
    '基本情報',
    withNotes(
      `
      sample text
      `
    )(() => {
      const slot = text('slot', 'リンクテキスト')
      const url = text('url', '//www.google.co.jp/')
      const blank = boolean('blank', false)
      return {
        components: { Link },
        methods: { action: action('link-clicked') },
        template: `<Link url="${url}" @click.native="action" :blank="${blank}">${slot}</Link>`,
        propsDescription: {
          url: 'リンクURL',
          blank: '別タブで開く'
        }
      }
    })
  )

// Example
