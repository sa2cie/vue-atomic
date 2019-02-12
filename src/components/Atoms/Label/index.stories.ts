/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import VueInfoAddon, { withInfo } from 'storybook-addon-vue-info'
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs/vue'
import { withNotes } from '@storybook/addon-notes'

// component
import Label from '@/components/Atoms/Label'

// stories - Demo
storiesOf('Atoms/Label', module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('Demo', withNotes(`これはラベルのコンポーネントです。`)(() => {
      // knobs setting - type
      const typeLabel = 'type'
      const typeDefault = 'default'
      const typeOptions = {
        default: 'default',
        primary: 'primary',
        success: 'success',
        info   : 'info',
        warning: 'warning',
        alert  : 'alert',
      }
      const type = select(typeLabel, typeOptions, typeDefault)

      // knobs setting - size
      const sizeLabel = 'size'
      const sizeDefault = 'medium'
      const sizeOptions = {
        xsmall: 'xsmall',
        small: 'small',
        medium: 'medium',
        large: 'large',
      }
      const size = select(sizeLabel, sizeOptions, sizeDefault)

      return {
        components: { Label },
        template: `<Label type="${type}" size="${size}">ラベル</Label>`,
        propsDescription: {
          type: 'ラベルの種類 [default, primary, success, info, warning, alert]',
          size: 'ラベルの大きさ [xsmall, small, medium, large]',
        },
      }
    })
  )

