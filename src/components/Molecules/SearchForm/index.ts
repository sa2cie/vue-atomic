import { Component, Prop, Vue } from 'vue-property-decorator'
import Icon from '@/components/Atoms/Icon'
import TextInput from '@/components/Atoms/TextInput'

@Component({
  components: {
    Icon,
    TextInput,
  }
})
export default class SearchForm extends Vue {
  // Props
  @Prop({ type: String }) private name!: string
  @Prop({ type: String }) private value!: string
  @Prop({ type: String }) private placeholder!: string
  @Prop({ type: Function }) private onChange!: (event: Event) => {}
  @Prop({ type: Function }) private onSubmit!: (event: Event) => {}
}
