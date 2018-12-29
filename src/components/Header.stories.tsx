import * as React from 'react'

import UnstyledHeader from 'components/Header'
import { storiesOf } from '@storybook/react'
import withThemeProvider from 'utils/withThemeProvider'

const Header = withThemeProvider(UnstyledHeader)
storiesOf('Header', module)
  .add('Default', () => {
    return (
      <Header
        navItems={[
          { title: 'Pages', path: '/pages' },
          { title: 'About', path: '/about' },
          { title: 'Contact', path: '/contact' }
        ]}
      />
    )
  })
