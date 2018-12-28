import * as React from 'react'

import UnthemedLogo from 'components/Logo'
import { storiesOf } from '@storybook/react'
import withThemeProvider from 'utils/withThemeProvider';

const Logo = withThemeProvider(UnthemedLogo)

storiesOf('Logo', module)
  .add('Default', () => {
    return <Logo />
  })

