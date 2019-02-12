import { Component, Prop, Vue } from 'vue-property-decorator'
import Img from '@/components/Atoms/Img'
import Label from '@/components/Atoms/Label'

@Component({
  components: {
    Img,
    Label,
  }
})
export default class ItemThumb extends Vue {
  // Props
  @Prop({ type: String }) private src!: string
  @Prop({ type: String }) private alt!: string
  @Prop({ type: String }) private label!: string
}
