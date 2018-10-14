/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs, text } from '@storybook/addon-knobs'
import { withNotes } from '@storybook/addon-notes'

// StoryComponent
import Img from '@/components/Atoms/Img'

// 基本情報
storiesOf('Atoms/Img', module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('基本情報', withNotes(
    `
      sample text
    `
  )(() => {
    const url = text('url', 'https://jungle-time.com/wp-content/uploads/2018/03/red-fox-2230730_1280.jpg')
    const alt =  text('alt', '画像のAltテキスト')
    const title =  text('title', '画像のタイトル')
    const width =  text('width', '600')
    const height =  text('height', '300')
    return {
      components: { Img },
      template: `<Img url="${ url }" alt="${ alt }" width="${ width }" height="${ height }" title="${ title }" />`,
      propsDescription: {
        url: `画像のURL`,
        alt: '画像のAltテキスト',
        title: '画像のタイトルテキスト',
        width: '画像の横幅',
        height: '画像の縦幅',
      },
    }
  }))

// Example
storiesOf('Atoms/Img', module)
  .add('Normal', () => ({
    components: { Img },
    template: '<Img url="https://jungle-time.com/wp-content/uploads/2018/03/red-fox-2230730_1280.jpg" alt="Fox Image" width="400" height="240" />',
    methods: { action: action('clicked') }
  }))

