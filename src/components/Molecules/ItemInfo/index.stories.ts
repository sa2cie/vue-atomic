/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue"
import { action } from "@storybook/addon-actions"
import VueInfoAddon from "storybook-addon-vue-info"
import { withKnobs, text, boolean } from "@storybook/addon-knobs"
import { withNotes } from "@storybook/addon-notes"

// StoryComponent
import ItemInfo from "@/components/Molecules/ItemInfo"

// Usage

storiesOf('Molecules/ItemInfo', module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add(
    'Usage',
    withNotes(
      `
      商品情報を表示するカードです。
    `
    )(() => {
      const name = text('name', '商品のタイトル')
      const price = text('price', '1,980')
      const count = text('count', '300')
      return {
        components: { ItemInfo },
        template: `
          <ItemInfo
            name=${name}
            price="${price}"
            count="${count}"
          />`,
        propsDescription: {
          name: '商品のタイトル',
          price: '商品の金額',
          count: '商品のお気に入り数',
        },
      }
    })
  )

