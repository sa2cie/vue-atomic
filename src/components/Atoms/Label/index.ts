import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Label extends Vue {
  // Props
  @Prop({ type: String, default: 'default' }) private type!: string
  @Prop({ type: String, default: 'medium' }) private size!: string

  // TODO:
  get styleLabelType() {
    return `--${this.type}`
  }
  // TODO:
  get styleLabelSize() {
    return `--${this.size}`
  }
}
