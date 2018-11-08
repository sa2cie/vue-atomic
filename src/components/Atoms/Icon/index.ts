import { Component, Prop, Vue } from 'vue-property-decorator'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleLeft, faSearch, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faAngleLeft)
library.add(faSearch)
library.add(faHeart)
Vue.component('font-awesome-icon', FontAwesomeIcon)

@Component
export default class Icon extends Vue {
  // Props
  @Prop({ type: String, default: 'search' }) private name!: string
  @Prop({ type: String, default: 'default' }) private type!: string
  @Prop({ type: String, default: 'medium' }) private size!: string

  // TODO:
  get styleIconType() {
    return `--${this.type}`
  }
  // TODO:
  get styleIconSize() {
    return `--${this.size}`
  }
}
