/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import VueInfoAddon, { withInfo } from 'storybook-addon-vue-info'
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs/vue'
import { withNotes } from '@storybook/addon-notes'

// component
import Price from '@/components/Molecules/Price'

// stories - Demo
storiesOf('Molecules/Price', module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('Demo', withNotes(`sample text`)(() => {
    const txt = text(
      'text',
      `2,900`,
    )
    return {
      components: { Price },
      template: `<Price>${txt}</Price>`,
      methods: { action: action('button-clicked') },
    }
  }))
