import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import VueInfoAddon, { withInfo } from 'storybook-addon-vue-info'
import { withKnobs, text, array, object } from '@storybook/addon-knobs/vue'
import { withNotes } from '@storybook/addon-notes'

// StoryComponent
import SearchItemListTemplate from '@/components/Templates/SearchItemListTemplate'

// Demo
storiesOf('Templates/SearchItemListTemplate', module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('Demo', withNotes(`sample text`)(() => {
    const name = text('searchInputName', 'keyword')
    const value = text('searchInputValue', '')
    const placeholder = text('searchInputPlaceholder', 'キーワードから探す')
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
        label: '送料無料',
        isFavorite: false
      }
    ]`
    const itemsData = text('searchItems', data)
    return {
      components: { SearchItemListTemplate },
      methods: {
        changeAction: action('input-change'),
        submitAction: action('input-submit'),
        favoriteAction: action('favorite-clicked')
      },
      template: `
        <SearchItemListTemplate
          searchInputValue="${value}"
          searchInputName="${name}"
          searchInputPlaceholder="${placeholder}"
          :changeSearchInput="changeAction"
          :submitSearchInput="submitAction"
          :searchItems="${itemsData}"
          :clickFavoriteButton="favoriteAction"
        />
      `,
      propsDescription: {
        searchInputValue: 'v-model属性',
        searchInputName: 'name属性',
        searchInputPlaceholder: 'placeholder属性',
        changeSearchInput: 'value値が変わった時に発生するイベント',
        submitSearchInput: 'フォームフォーカス中にEnterをクリックした時発生するイベント',
        searchItems: `
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
  }))
