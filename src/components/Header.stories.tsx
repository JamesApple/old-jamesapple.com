import * as React from 'react'

import UnstyledHeader from 'components/Header'
import { storiesOf } from '@storybook/react'
import withThemeProvider from 'utils/withThemeProvider'
import styled from 'utils/styled-components'

const Header = withThemeProvider(UnstyledHeader)

const SlimContainer = styled.div`
  margin: auto;
  max-width: 350px;
`

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

  .add('Slim', () => {
    return (
      <SlimContainer>
        <Header
          navItems={[
            { title: 'Pages', path: '/pages' },
            { title: 'About', path: '/about' },
            { title: 'Contact', path: '/contact' }
          ]}
        />
      </SlimContainer>
    )
  })
