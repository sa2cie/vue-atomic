import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Txt extends Vue {
  // Props
  @Prop({ type: String, default: 'default' }) private type!: string
  @Prop({ type: String, default: 'medium' }) private size!: string

  // TODO:
  get styleTxtType() { return `--${this.type}` }
  // TODO:
  get styleTxtSize() { return `--${this.size}` }
}
