import { Component, Prop, Vue } from 'vue-property-decorator'
import Txt from '@/components/Atoms/Txt'
import Price from '@/components/Molecules/Price'
import FavoriteCount from '@/components/Molecules/FavoriteCount'

@Component({
  components: {
    Txt,
    Price,
    FavoriteCount,
  }
})
export default class ItemInfo extends Vue {
  // Props
  @Prop({ type: String }) private name!: string
  @Prop({ type: String }) private price!: string
  @Prop({ type: String }) private count!: string
}
