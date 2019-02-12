/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import VueInfoAddon, { withInfo } from 'storybook-addon-vue-info'
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs/vue'
import { withNotes } from '@storybook/addon-notes'

// component
import ItemThumb from '@/components/Molecules/ItemThumb'

// stories - Demo
storiesOf('Molecules/ItemThumb', module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('Demo', withNotes(`これはボタンのコンポーネントです。クリック時に何らかの処理を開始する機能をユーザーに提供する最小コンポーネントです。`)(() => {
    const src = text('src', 'https://dummyimage.com/400x400/f7f8f8/')
    const alt = text('alt', '商品のタイトル')
    const label = text('label', '送料無料')
    return {
      components: { ItemThumb },
      template: `<ItemThumb src="${src}" alt="${alt}" label="${label}" />`,
      propsDescription: {
        src: '商品画像のsrc属性',
        alt: '商品画像のalt属性',
        label: '商品のラベル',
      },
    }
  }))
