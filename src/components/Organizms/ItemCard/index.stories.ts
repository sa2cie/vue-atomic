import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs, text, boolean } from '@storybook/addon-knobs/vue'
import { withNotes } from '@storybook/addon-notes'

// StoryComponent
import ItemCard from '@/components/Organizms/ItemCard'

// Demo
storiesOf('Organizms/ItemCard', module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('Demo', withNotes(`商品情報を表示するカードです。`)(() => {
    const name = text('name', '商品のタイトル')
    const lot = text('lot', '001')
    const src = text('src', 'https://dummyimage.com/400x400/f7f8f8/')
    const alt = text('alt', '商品のタイトル')
    const price = text('price', '1,980')
    const count = text('count', '300')
    const label = text('label', '送料無料')
    const active = boolean('Favorite?', false)
    return {
      components: { ItemCard },
      template: `
      <div style="max-width: 240px">
        <ItemCard
          name=${name}
          lot=${lot}
          src="${src}"
          alt="${alt}"
          price="${price}"
          count="${count}"
          label="${label}"
          :clickFavoriteButton="action"
          :isActiveFavoriteButton="${active}"
        />
      </div>`,
      propsDescription: {
        name: '商品のタイトル',
        lot: '商品のロットナンバー',
        src: '商品画像のsrc属性',
        alt: '商品画像のalt属性',
        price: '商品の金額',
        count: '商品のお気に入り数',
        label: '商品のラベル',
        clickFavoriteButton: 'お気に入りボタンをクリックした時のイベント',
        isActiveFavoriteButton: 'お気に入りボタンのアクティブ状態を切り替える真偽値'
      },
      methods: { action: action('favorite-clicked') },
    }
  }))

