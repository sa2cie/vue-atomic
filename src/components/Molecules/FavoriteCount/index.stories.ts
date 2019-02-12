/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import VueInfoAddon, { withInfo } from 'storybook-addon-vue-info'
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs/vue'
import { withNotes } from '@storybook/addon-notes'

// component
import FavoriteCount from '@/components/Molecules/FavoriteCount'

// stories - Demo
storiesOf('Molecules/FavoriteCount', module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('Demo', withNotes(`sample text`)(() => {
    const txt = text(
      'text',
      `100`,
    )
    return {
      components: { FavoriteCount },
      template: `<FavoriteCount>${txt}</FavoriteCount>`,
      methods: { action: action('button-clicked') },
    }
  }))
