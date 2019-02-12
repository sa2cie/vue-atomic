import { Component, Prop, Vue } from 'vue-property-decorator'

import SearchHeader from '@/components/Organizms/SearchHeader'
import ItemCardList from '@/components/Organizms/ItemCardList'

@Component({
  components: {
    SearchHeader,
    ItemCardList,
  },
})
export default class SearchItemListTemplate extends Vue {
  @Prop({ type: String }) private searchInputName!: string
  @Prop({ type: String }) private searchInputValue!: string
  @Prop({ type: String }) private searchInputPlaceholder!: string
  @Prop({ type: Function }) private changeSearchInput!: (event: Event) => {}
  @Prop({ type: Function }) private submitSearchInput!: (event: Event) => {}
  @Prop({ type: Array }) private searchItems!: object[]
  @Prop({ type: Function }) private clickFavoriteButton!: (event: Event) => {}
}
