import * as React from 'react'

import UnthemedIndexPage from 'components/IndexPage'
import { storiesOf } from '@storybook/react'
import withThemeProvider from 'utils/withThemeProvider'

const IndexPage = withThemeProvider(UnthemedIndexPage)

const postDetails = [
  {
    title: 'Dismantle the System of Opression',
    excerpt: `
    Rendering and interaction have become a lot more consistent across browsers in
    recent years. It’s still not perfectly uniform, however, and a lot of small
    issues can trip you up. Add on top of these issues the variables of different
    screen sizes, language preferences and plain human error, and we find a lot of
    small things to trip up a developer.
      `,
    path: '/posts/opression',
    date: 'December 2018',
    headerImage: null
  }
]

storiesOf('IndexPage', module).add('Default', () => {
  return <IndexPage postDetails={postDetails} />
})
