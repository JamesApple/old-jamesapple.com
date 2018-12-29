import * as React from 'react'

import UnthemedIndexPage from 'components/IndexPage'
import { storiesOf } from '@storybook/react'
import withThemeProvider from 'utils/withThemeProvider'
import PreviewMarkdown from 'models/PreviewMarkdown'

const IndexPage = withThemeProvider(UnthemedIndexPage)

const previewMarkdowns = [
  PreviewMarkdown.fromFragment({
    excerpt: `
    Rendering and interaction have become a lot more consistent across browsers in
    recent years. It’s still not perfectly uniform, however, and a lot of small
    issues can trip you up. Add on top of these issues the variables of different
    screen sizes, language preferences and plain human error, and we find a lot of
    small things to trip up a developer.
      `,
    frontmatter: {
      title: 'Dismantle the System of Opression',
      path: '/posts/opression',
      date: 'December 2018',
      headerImage: null
    }
  })
]

storiesOf('IndexPage', module).add('Default', () => {
  return <IndexPage previewMarkdowns={previewMarkdowns} />
})
