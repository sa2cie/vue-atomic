import { Component, Prop, Vue } from 'vue-property-decorator'
import Txt from '@/components/Atoms/Txt'

@Component({
  components: {
    Txt,
  }
})
export default class Price extends Vue { }
