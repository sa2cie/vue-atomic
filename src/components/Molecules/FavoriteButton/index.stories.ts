/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import VueInfoAddon, { withInfo } from 'storybook-addon-vue-info'
import { withKnobs, boolean } from '@storybook/addon-knobs/vue'
import { withNotes } from '@storybook/addon-notes'

// component
import FavoriteButton from '@/components/Molecules/FavoriteButton'

// stories - Usage
storiesOf('Molecules/FavoriteButton', module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add(
    'Usage',
    withNotes(
      `
      これはお気に入りボタンのコンポーネントです。
    `
    )(() => {
      const isActive = boolean('Favorite?', false)
      return {
        components: { FavoriteButton },
        template: `<FavoriteButton :click="action" :isActive="${isActive}" />`,
        methods: { action: action('button-clicked') },
        propsDescription: {
          click: 'お気に入りボタンをクリックした時のイベント',
          isActive: 'お気に入りボタンのアクティブ状態を切り替える真偽値'
        },
      }
    })
  )
