/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import VueInfoAddon, { withInfo } from 'storybook-addon-vue-info'
import { withKnobs, text, boolean } from '@storybook/addon-knobs/vue'
import { withNotes } from '@storybook/addon-notes'

// StoryComponent
import Link from '@/components/Atoms/Link'

// Demo
storiesOf('Atoms/Link', module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('Demo', withNotes(`sample text`)(() => {
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
