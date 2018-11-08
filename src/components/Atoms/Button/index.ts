import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Button extends Vue {
  // Props
  @Prop({ type: String, default: 'default' }) private type!: string
  @Prop({ type: String, default: 'medium' }) private size!: string
  @Prop({ type: String, default: 'inline-block' }) private display!: string
  @Prop({ type: Boolean, default: false }) private disabled!: boolean
  @Prop({ type: Boolean, default: false }) private transparent!: boolean
  @Prop({ type: Boolean, default: false }) private circle!: boolean

  // TODO:
  get styleButtonType() {
    return `--${this.type}`
  }
  // TODO:
  get styleButtonDisplay() {
    return `--${this.display}`
  }
  // TODO:
  get styleButtonSize() {
    return `--${this.size}`
  }
}
