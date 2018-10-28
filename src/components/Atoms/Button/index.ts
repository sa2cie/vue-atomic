import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Button extends Vue {
  @Prop({ type: String, default: 'default' }) private type!: string
  @Prop({ type: Boolean, default: false }) private isBlock!: boolean
  @Prop({ type: Boolean, default: false }) private disabled!: boolean

  // TODO:
  get styleButtonType() {
    return this.type
  }
  // TODO
  get styleButtonisBlock() {
    return this.isBlock ? 'block' : ''
  }
}
