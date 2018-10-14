/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs, text } from '@storybook/addon-knobs'
import { withNotes } from '@storybook/addon-notes'

// StoryComponent
import YoutubeCard from '@/components/Molecules/YoutubeCard'

// 基本情報
storiesOf('Molecules/YoutubeCard', module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('基本情報', withNotes(
    `
      sample text
    `
  )(() => {
    const title =  text('title', '画像のタイトル')
    const image = text('image', 'https://jungle-time.com/wp-content/uploads/2018/03/red-fox-2230730_1280.jpg')
    const url = text('url', 'https://jungle-time.com/wp-content/uploads/2018/03/red-fox-2230730_1280.jpg')
    const alt =  text('alt', '画像のAltテキスト')
    const description =  text('description', 'aaaaaaaaaaaaaaaaaa')
    return {
      components: { YoutubeCard },
      template: `<YoutubeCard title="${ title }" description="${ description }" image="${ image }" url="${ url }" alt="${ alt }" />`,
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
storiesOf('Molecules/YoutubeCard', module)
  .add('Normal', () => ({
    components: { YoutubeCard },
    template: '<YoutubeCard image="https://jungle-time.com/wp-content/uploads/2018/03/red-fox-2230730_1280.jpg" url="index.html" alt="Fox Image" width="400" height="240" />',
    methods: { action: action('clicked') }
  }))

