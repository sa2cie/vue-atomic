import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Link extends Vue {
  @Prop({ type: String, required: true }) private url!: string
  @Prop({ type: Boolean, default: false }) private blank!: boolean
}
