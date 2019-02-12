import { storiesOf, addDecorator } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import VueInfoAddon, { withInfo } from 'storybook-addon-vue-info'
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs/vue'
import { withNotes } from '@storybook/addon-notes'
import doc from '@/components/Atoms/Button/index.md'

// component
import Button from '@/components/Atoms/Button'

// stories
storiesOf('Atoms/Button', module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('Demo', withNotes(doc)(() => {
    const typeLabel: string = 'type'
    const typeDefault: string = 'default'
    const typeOptions: { [s: string]: string } = {
      default: 'default',
      primary: 'primary',
      success: 'success',
      info   : 'info',
      warning: 'warning',
      alert  : 'alert',
    }
    const sizeLabel: string = 'size'
    const sizeDefault: string = 'medium'
    const sizeOptions: { [s: string]: string } = {
      small: 'small',
      medium: 'medium',
      large: 'large',
    }

    // Knobs
    const type: string = select(typeLabel, typeOptions, typeDefault)
    const size: string = select(sizeLabel, sizeOptions, sizeDefault)
    const txt: string = text('txt', 'ボタンテキスト')
    const disabled: boolean = boolean('disabled', false)
    const transparent: boolean = boolean('transparent', false)
    const circle: boolean = boolean('circle', false)

    return ({
      components: { Button },
      propsDescription: {
        type: 'ボタンの種類',
        size: 'ボタンの大きさ',
        disabled: 'disabled属性',
        display: 'display要素',
        transparent: '背景枠無しのボタンとして表示する',
        circle: 'フローティングボタンとして表示する',
      },
      template: `
      <Button
        type="${type}"
        size="${size}"
        :disabled="${disabled}"
        :transparent="${transparent}"
        :circle="${circle}"
        @click.native="click"
      >
        ${txt}
      </Button>`,
      methods: { click: action('button-clicked') },
    })
  }))

storiesOf('Atoms/Button', module)
  .add('Pattern', () => ({
    components: { Button },
    template:
      `
      <article>
        <section style="margin: 30px;">
          <h4>Pattern - Size</h4>
          <div style="margin-bottom: 20px;">
            <Button type='default' size='small'>Default</Button>
            <Button type='primary' size='small'>Primary</Button>
            <Button type='success' size='small'>Success</Button>
            <Button type='info' size='small'>Info</Button>
            <Button type='warning' size='small'>Warning</Button>
            <Button type='alert' size='small'>Alert</Button>
          </div>
          <div style="margin-bottom: 20px;">
            <Button type='default'>Default</Button>
            <Button type='primary'>Primary</Button>
            <Button type='success'>Success</Button>
            <Button type='info'>Info</Button>
            <Button type='warning'>Warning</Button>
            <Button type='alert'>Alert</Button>
          </div>
          <div style="margin-bottom: 20px;">
            <Button type='default' size='large'>Default</Button>
            <Button type='primary' size='large'>Primary</Button>
            <Button type='success' size='large'>Success</Button>
            <Button type='info' size='large'>Info</Button>
            <Button type='warning' size='large'>Warning</Button>
            <Button type='alert' size='large'>Alert</Button>
          </div>
        </section>
        <section style="margin: 30px;">
          <h4>Pattern - Transparent</h4>
          <div style="margin-bottom: 20px;">
            <Button type='default' transparent>Default</Button>
            <Button type='primary' transparent>Primary</Button>
            <Button type='success' transparent>Success</Button>
            <Button type='info' transparent>Info</Button>
            <Button type='warning' transparent>Warning</Button>
            <Button type='alert' transparent>Alert</Button>
          </div>
        </section>
        <section style="margin: 30px;">
          <h4>Pattern - Circle</h4>
          <div style="margin-bottom: 20px;">
            <Button type='default' circle>A</Button>
            <Button type='primary' circle>B</Button>
            <Button type='success' circle>C</Button>
            <Button type='info' circle>D</Button>
            <Button type='warning' circle>E</Button>
            <Button type='alert' circle>F</Button>
          </div>
        </section>
        <section style="margin: 30px;">
          <h4>Pattern - Disabled</h4>
          <div style="margin-bottom: 20px;">
            <Button type='default' disabled>Default</Button>
            <Button type='primary' disabled>Primary</Button>
            <Button type='success' disabled>Success</Button>
            <Button type='info' disabled>Info</Button>
            <Button type='warning' disabled>Warning</Button>
            <Button type='alert' disabled>Alert</Button>
          </div>
          <div style="margin-bottom: 20px;">
            <Button type='default' transparent disabled>Default</Button>
            <Button type='primary' transparent disabled>Primary</Button>
            <Button type='success' transparent disabled>Success</Button>
            <Button type='info' transparent disabled>Info</Button>
            <Button type='warning' transparent disabled>Warning</Button>
            <Button type='alert' transparent disabled>Alert</Button>
          </div>
          <div style="margin-bottom: 20px;">
            <Button type='default' circle disabled>A</Button>
            <Button type='primary' circle disabled>B</Button>
            <Button type='success' circle disabled>C</Button>
            <Button type='info' circle disabled>D</Button>
            <Button type='warning' circle disabled>E</Button>
            <Button type='alert' circle disabled>F</Button>
          </div>
        </section>
      </article>
      `,
  }))
