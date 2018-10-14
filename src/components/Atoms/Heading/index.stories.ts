/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

import { action } from '@storybook/addon-actions'
import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs, text, select } from '@storybook/addon-knobs'
import { withNotes } from '@storybook/addon-notes'

// StoryComponent
import Heading from '@/components/Atoms/Heading'

// 基本情報
const label = 'level'
const options = { 1: 'H1', 2: 'H2', 3: 'H3', 4: 'H4', 5: 'H5', 6: 'H6' }
const defaultValue = 1

storiesOf('Atoms/Heading', module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add(
    '基本情報',
    withNotes(
      `
      sample text
    `
    )(() => {
      const txt = text('txt', 'HeadingComponent')
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
  .add('レベル1', () => ({
    components: { Heading },
    template:
      '<Heading :level=1 txt="H1 HeadingComponent"/>'
  }))
  .add('レベル2', () => ({
    components: { Heading },
    template:
      '<Heading :level=2 txt="H2 HeadingComponent"/>'
  }))
  .add('レベル3', () => ({
    components: { Heading },
    template:
      '<Heading :level=3 txt="H3 HeadingComponent"/>'
  }))
  .add('レベル4', () => ({
    components: { Heading },
    template:
      '<Heading :level=4 txt="H4 HeadingComponent"/>'
  }))
  .add('レベル5', () => ({
    components: { Heading },
    template:
      '<Heading :level=5 txt="H5 HeadingComponent"/>'
  }))
  .add('レベル6', () => ({
    components: { Heading },
    template:
      '<Heading :level=6 txt="H6 HeadingComponent"/>'
  }))
