import { Component, Prop, Vue } from 'vue-property-decorator'
import ExitButton from '@/components/Molecules/ExitButton'
import SearchForm from '@/components/Molecules/SearchForm'

@Component({
  components: {
    ExitButton,
    SearchForm,
  }
})
export default class SearchHeader extends Vue {
  // Props
  @Prop({ type: String }) private value!: string
  @Prop({ type: String }) private name!: string
  @Prop({ type: String }) private placeholder!: string
  @Prop({ type: Function }) private onChange!: (event : Event) => {}
  @Prop({ type: Function }) private onSubmit!: (event : Event) => {}
}
