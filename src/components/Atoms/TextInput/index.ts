import { Component, Prop, Emit, Vue } from 'vue-property-decorator'

@Component
export default class TextInput extends Vue {
    @Prop({ type: String }) private name!: string
    @Prop({ type: String }) private value!: string
    @Prop({ type: String, default: '' }) private placeholder!: string
    @Prop({ type: Function }) private onChange!: (event : Event) => {}
    @Prop({ type: Function }) private onSubmit!: (event : Event) => {}
    @Prop({ type: Boolean, default: false }) private withIcon!: boolean

    get inputValue() {
        return this.value
    }

    set inputValue(value : String) {
        this.$emit('input', value)
    }
}
