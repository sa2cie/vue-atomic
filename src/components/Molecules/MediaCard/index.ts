import { Component, Prop, Vue } from 'vue-property-decorator'

import Heading from '@/components/Atoms/Heading'
import Txt from '@/components/Atoms/Txt'
import Img from '@/components/Atoms/Img'
import Link from '@/components/Atoms/Link'

@Component({
  components: {
    Heading,
    Txt,
    Img,
    Link,
  },
})
export default class MediaCard extends Vue {
  @Prop({ type: String, required: true })
  private image!: string
  @Prop({ type: String, required: true })
  private alt!: string
  @Prop({ type: String, required: true })
  private title!: string
  @Prop({ type: String, required: true })
  private description!: string
  @Prop({ type: String, required: true })
  private url!: string
  @Prop({ type: Function, required: true })
  private click!: void
}
