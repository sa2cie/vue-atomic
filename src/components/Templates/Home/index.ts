import { Component, Prop, Vue } from 'vue-property-decorator'
import axios from 'axios'
import VueAxios from 'vue-axios'

import Heading from '@/components/Atoms/Heading'
import MediaCardList from '@/components/Organizms/MediaCardList'


Vue.use(VueAxios, axios)

interface PrivateState {
    media: {
        data: object[];
        name: {
            title: string;
            description: string;
            image: string;
            url: string;
        }
    }
}

@Component({
    components: {
        Heading,
        MediaCardList,
    },
})
export default class Home extends Vue {
    private privateState: PrivateState = {
        media: {
            data: [],
            name: {
                title: 'title',
                description: 'keyword',
                image: 'preview_url',
                url: 'embedded_url',
            },
        },
    }

    public created() {
        // tslint:disable-next-line:max-line-length
        Vue.axios.get('https://api.avgle.com/v1/videos/0').then((response) => this.privateState.media.data = response.data.response.videos)
        console.log(this.privateState.media.data)
    }
}
