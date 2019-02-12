import { Component, Prop, Vue } from 'vue-property-decorator'
import Icon from '@/components/Atoms/Icon'
import Txt from '@/components/Atoms/Txt'

@Component({
  components: {
    Icon,
    Txt,
  }
})
export default class FavoriteCount extends Vue { }
