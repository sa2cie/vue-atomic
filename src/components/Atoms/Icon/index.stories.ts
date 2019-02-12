/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import VueInfoAddon, { withInfo } from 'storybook-addon-vue-info'
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs/vue'
import { withNotes } from '@storybook/addon-notes'

// component
import Icon from '@/components/Atoms/Icon'

// stories - Demo
storiesOf('Atoms/Icon', module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('Demo', withNotes(`これはアイコンのコンポーネントです。何らかのシンボルを表示する機能をユーザーに提供する最小コンポーネントです。`)(() => {
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

      // knobs setting - name
      const name = text('name', 'heart')

      return {
        components: { Icon },
        template: `<Icon name="${name}" type="${type}" size="${size}" />`,
        propsDescription: {
          name: 'アイコンの名前 [search, heart, angle-left]',
          type: 'アイコンの種類 [default, primary, success, info, warning, alert]',
          size: 'アイコンの大きさ [xsmall, small, medium, large]',
        },
      }
    })
  )

