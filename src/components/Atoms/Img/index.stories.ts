/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import VueInfoAddon, { withInfo } from 'storybook-addon-vue-info'
import { withKnobs, text } from '@storybook/addon-knobs/vue'
import { withNotes } from '@storybook/addon-notes'

// StoryComponent
import Img from '@/components/Atoms/Img'

// Usage
storiesOf('Atoms/Img', module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('Usage', withNotes(
    `
      sample text
    `
  )(() => {
    const src = text('src', 'https://jungle-time.com/wp-content/uploads/2018/03/red-fox-2230730_1280.jpg')
    const alt =  text('alt', '画像のAltテキスト')
    const title =  text('title', '画像のタイトル')
    const width =  text('width', '600')
    const height =  text('height', '300')
    return {
      components: { Img },
      template: `<Img src="${ src }" alt="${ alt }" width="${ width }" height="${ height }" title="${ title }" />`,
      propsDescription: {
        src: `画像のsrc属性`,
        alt: '画像のalt属性',
        title: '画像のtitle属性',
        width: '画像の横幅',
        height: '画像の縦幅',
      },
    }
  }))

// Example
storiesOf('Atoms/Img', module)
  .add('Normal', () => ({
    components: { Img },
    template: '<Img src="https://jungle-time.com/wp-content/uploads/2018/03/red-fox-2230730_1280.jpg" alt="Fox Image" width="400" height="240" />',
    methods: { action: action('clicked') }
  }))

