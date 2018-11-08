import { storiesOf } from '@storybook/vue'

// StoryComponent
import SearchItemListPage from '@/components/Pages/SearchItemListPage'

// Usage
storiesOf('Pages/SearchItemListPage', module)
  .add(
    'Usage',
    (() => {
      return {
        components: { SearchItemListPage },
        template: `
          <SearchItemListPage />
        `,
      }
    })
  )