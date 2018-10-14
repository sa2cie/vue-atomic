import { Component, Prop, Vue } from 'vue-property-decorator'

import MediaCard from '@/components/Molecules/MediaCard'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

@Component({
    components: {
        MediaCard,
    }
})
export default class MediaCardList extends Vue {
    @Prop({ type: Array,  required: true }) private data!: object[]
    @Prop({ type: String, default: 'title' }) private titleKey!: string
    @Prop({ type: String, default: 'description' }) private descriptionKey!: string
    @Prop({ type: String, default: 'image' }) private imageKey!: string
    @Prop({ type: String, default: 'alt' }) private altKey!: string
    @Prop({ type: String, default: 'url' }) private urlKey!: string
    @Prop({ type: Function }) private click!: void

    public created() {
        // tslint:disable-next-line:max-line-length
        // Vue.axios.get('https://api.avgle.com/v1/videos/0', {
        //     headers: {
        //     },
        // }).then(response => this.request = response.data.response.videos);
        // console.log(this.request);
    }
}
