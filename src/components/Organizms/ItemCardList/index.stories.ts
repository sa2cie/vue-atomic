/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue"
import { action } from "@storybook/addon-actions"
import VueInfoAddon from "storybook-addon-vue-info"
import { withKnobs, text } from "@storybook/addon-knobs"
import { withNotes } from "@storybook/addon-notes"

// StoryComponent
import ItemCardList from "@/components/Organizms/ItemCardList"

// Usage

storiesOf('Organizms/ItemCardList', module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add(
    'Usage',
    withNotes(
      `
      商品情報を表示するカードです。
    `
    )(() => {
      const data = `[
        {
          name: '商品1',
          lot: '001',
          src: 'https://dummyimage.com/400x400/f7f8f8/',
          alt: '商品1',
          price: '2,000',
          count: '700',
          label: '送料無料',
          isFavorite: true
        },
        {
          name: '商品2',
          lot: '002',
          src: 'https://dummyimage.com/400x400/f7f8f8/',
          alt: '商品2',
          price: '980',
          count: '10',
          label: '送料無料',
          isFavorite: false
        },
        {
          name: '商品3',
          lot: '003',
          src: 'https://dummyimage.com/400x400/f7f8f8/',
          alt: '商品3',
          price: '1,980',
          count: '100',
          label: '',
          isFavorite: false
        }
      ]`
      const itemsData = text('items', data)
      return {
        components: { ItemCardList },
        template: 
          `
          <div style="width:360px">
            <ItemCardList
              :items="${itemsData}"
              :clickFavoriteButton="action"
            />
          </div>
          `,
        methods: { action: action('favorite-clicked') },
        propsDescription: {
          items: `
            表示する商品一覧のデータ
            例：[{
              name: '商品名',
              lot: '001',
              src: 'https://dummyimage.com/400x400/f7f8f8/',
              alt: '商品1',
              price: '2,000',
              count: '700',
              label: '送料無料',
              isFavorite: true
            }]`,
          clickFavoriteButton: 'お気に入りボタンをクリックした時のイベント'
         }
      }
    })
  )

