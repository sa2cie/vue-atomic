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
  private getModifierClass(name: string): string {
    return name === '' ? '' : `--${name}`
  }
  // TODO:
  get styleButtonType(): string {
    return this.getModifierClass(this.type)
  }
  // TODO:
  get styleButtonDisplay(): string {
    return this.getModifierClass(this.display)
  }
  // TODO:
  get styleButtonSize(): string {
    return this.getModifierClass(this.size)
  }
  // TODO:
  get styleButtonTransparent(): string {
    return this.getModifierClass(this.transparent ? 'transparent' : '')
  }
  // TODO:
  get styleButtonCircle(): string {
    return this.getModifierClass(this.circle ? 'circle' : '')
  }
}
