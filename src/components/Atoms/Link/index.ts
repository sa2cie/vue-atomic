import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Link extends Vue {
    // @Prop({ type: String, required: true }) private txt!: string
    @Prop({ type: String, required: true }) private url!: string
    // @Prop({ type: Function, default: '(e) => {}' }) private click!: void
    @Prop({ type: Boolean, default: false }) private blank!: boolean
}
