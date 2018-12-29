import * as React from 'react'

import UnstyledHeader from 'components/Header'
import { storiesOf } from '@storybook/react'
import withThemeProvider from 'utils/withThemeProvider'

const Header = withThemeProvider(UnstyledHeader)
storiesOf('Header', module)
  .add('Default', () => {
    return (
      <Header />
    )
  })
