import { Component, Prop, Vue } from 'vue-property-decorator'
import ItemCard from '@/components/Organizms/ItemCard'

@Component({
    components: {
        ItemCard,
    }
})

export default class ItemCardList extends Vue {
    @Prop({ type: Array, required: true }) private items!: object[]
    @Prop({ type: Function }) private clickFavoriteButton! : (event : Event) => {}
        
    public clickEvent(event : Event) {
        event.preventDefault();
        return this.clickFavoriteButton(event);
    }
}
