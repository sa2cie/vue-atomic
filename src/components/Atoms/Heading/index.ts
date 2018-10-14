import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Heading extends Vue {
  @Prop({ type: String, default: '見出しテキスト' }) private txt!: string
  @Prop({ type: Number, default: 2 }) private level!: number
}
