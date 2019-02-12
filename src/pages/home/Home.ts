import { Component, Prop, Vue } from 'vue-property-decorator'
import SearchItemListTemplate from '@/components/Templates/SearchItemListTemplate'

interface SearchItems {
  name: string
  lot: string
  src: string
  alt: string
  price: string
  count: string
  label: string
  isFavorite: boolean
}

interface PrivateState {
  searchInputName: string
  searchInputValue: string
  searchInputPlaceholder: string
  searchItems: SearchItems[]
}

@Component({
  components: {
    SearchItemListTemplate
  },
})
export default class SearchItemListPage extends Vue {
  // PrivateState
  private privateState: PrivateState = {
    searchInputName: 'searchKeywords',
    searchInputValue: '',
    searchInputPlaceholder: 'キーワードから商品を探す',
    searchItems: [
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
    ],
  }
  // TODO:
  private changeSearchInput() {
    alert('changeSearchInput')
  }
  // TODO:
  private submitSearchInput() {
    alert('submitSearchInput')
  }
  // TODO:
  private clickFavoriteButton() {
    alert('clickFavoriteButton')
  }
}
