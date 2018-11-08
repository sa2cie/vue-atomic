/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf, addDecorator } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import VueInfoAddon, { withInfo } from 'storybook-addon-vue-info'
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs/vue'
import { withNotes } from '@storybook/addon-notes'

// component
import Button from '@/components/Atoms/Button'

// stories
storiesOf('Atoms/Button', module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('Usage', withNotes(
    `
    type: default, primary, success, info, warning, alert
    size: small, medium, large
    display: inline, inline-block, block
    `
  )(() => {
    const typeLabel : string = 'type'
    const typeDefault : string = 'default'
    const typeOptions : { [s: string]: string } = {
      default: 'default',
      primary: 'primary',
      success: 'success',
      info   : 'info',
      warning: 'warning',
      alert  : 'alert',
    }
    const type = select(typeLabel, typeOptions, typeDefault)
    const sizeLabel : string = 'size'
    const sizeDefault : string = 'medium'
    const sizeOptions : { [s: string]: string } = {
      small: 'small',
      medium: 'medium',
      large: 'large',
    }
    const size : string = select(sizeLabel, sizeOptions, sizeDefault)
    const txt : string = text('txt', 'ボタンテキスト')
    const disabled : boolean = boolean('disabled', false)
    const transparent : boolean = boolean('transparent', false)
    const circle : boolean = boolean('circle', false)

    return ({
      components: { Button },
      template: `
      <Button type="${type}" size="${size}" :disabled="${disabled}" :transparent="${transparent}" :circle="${circle}" @click.native="action">
        ${txt}
      </Button>`,
      propsDescription: {
        type: 'ボタンの種類',
        size: 'ボタンの大きさ',
        disabled: 'disabled属性',
        display: 'display要素',
        transparent: '背景枠無しのボタンとして表示する',
        circle: 'フローティングボタンとして表示する',
      },
      methods: { action: action('button-clicked') },
    })
  }))

// stories - パターン
storiesOf('Atoms/Button', module)
.add('Size', () => ({
  components: { Button },
  template:
    `
    <article>
      <section style="margin: 30px;">
        <h2>size - small</h2>
        <div style="margin-bottom: 20px;">
          <Button type='default' size='small'>Default</Button>
          <Button type='primary' size='small'>Primary</Button>
          <Button type='success' size='small'>Success</Button>
          <Button type='info' size='small'>Info</Button>
          <Button type='warning' size='small'>Warning</Button>
          <Button type='alert' size='small'>Alert</Button>
        </div>
      </section>
      <section style="margin: 30px;">
        <h2>size - medium</h2>
        <div>
          <Button type='default'>Default</Button>
          <Button type='primary'>Primary</Button>
          <Button type='success'>Success</Button>
          <Button type='info'>Info</Button>
          <Button type='warning'>Warning</Button>
          <Button type='alert'>Alert</Button>
        </div>
      </section>
      <section style="margin: 30px;">
        <h2>size - large</h2>
        <div>
          <Button type='default' size='large'>Default</Button>
          <Button type='primary' size='large'>Primary</Button>
          <Button type='success' size='large'>Success</Button>
          <Button type='info' size='large'>Info</Button>
          <Button type='warning' size='large'>Warning</Button>
          <Button type='alert' size='large'>Alert</Button>
        </div>
      </section>
    </article>
    `
}))
