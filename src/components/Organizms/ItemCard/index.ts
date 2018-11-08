import { Component, Prop, Vue } from 'vue-property-decorator'
import ItemThumb from '@/components/Molecules/ItemThumb'
import ItemInfo from '@/components/Molecules/ItemInfo'
import FavoriteButton from '@/components/Molecules/FavoriteButton'

@Component({
    components: {
        ItemThumb,
        ItemInfo,
        FavoriteButton,
    }
})
export default class ItemCard extends Vue {
    @Prop({ type: String }) private name!: string
    @Prop({ type: String }) private lot!: string
    @Prop({ type: String }) private src!: string
    @Prop({ type: String }) private alt!: string
    @Prop({ type: String }) private price!: string
    @Prop({ type: String }) private count!: string
    @Prop({ type: String }) private label!: string
    @Prop({ type: Function }) private clickFavoriteButton!: (event : Event) => {}
    @Prop({ type: Boolean, default: 'false' }) private isActiveFavoriteButton!: boolean
}
