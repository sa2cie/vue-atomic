/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

import { action } from '@storybook/addon-actions'
import VueInfoAddon, { withInfo } from 'storybook-addon-vue-info'
import { withKnobs, text, select } from '@storybook/addon-knobs/vue'
import { withNotes } from '@storybook/addon-notes'

// StoryComponent
import Heading from '@/components/Atoms/Heading'

// Demo
const label = 'level'
const options = { 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6' }
const defaultValue = 2

storiesOf('Atoms/Heading', module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('Demo', withNotes(`sample text`)(() => {
      const txt = text('txt', '見出しテキスト')
      const level = select(label, options, defaultValue)
      return {
        components: { Heading },
        template: `<Heading :level=${level} txt="${txt}" />`,
        propsDescription: {
          level: `見出しレベルの数値(1～6)`,
          txt: '見出しに表示するテキスト'
        }
      }
    })
  )

// Example
storiesOf('Atoms/Heading', module)
  .add('Pattern', () => ({
    components: { Heading },
    template: `
      <section style="margin: 30px;">
        <Heading :level=1 txt="H1 見出しテキスト"/>
        <Heading :level=2 txt="H2 見出しテキスト"/>
        <Heading :level=3 txt="H3 見出しテキスト"/>
        <Heading :level=4 txt="H4 見出しテキスト"/>
        <Heading :level=5 txt="H5 見出しテキスト"/>
        <Heading :level=6 txt="H6 見出しテキスト"/>
      </section>
    `
  }))
