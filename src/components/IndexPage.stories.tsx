import * as React from 'react'

import UnthemedIndexPage from 'components/IndexPage'
import { storiesOf } from '@storybook/react'
import withThemeProvider from 'utils/withThemeProvider'

const IndexPage = withThemeProvider(UnthemedIndexPage)

storiesOf('IndexPage', module).add('Default', () => {
  return <IndexPage />
})
