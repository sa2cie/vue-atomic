import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Heading extends Vue {
  @Prop({ type: String, default: 'リードテキスト' }) private message!: string
}
