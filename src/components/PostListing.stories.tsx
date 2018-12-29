import * as React from 'react'

import UnthemedPostListing from 'components/PostListing'
import { storiesOf } from '@storybook/react'
import withThemeProvider from 'utils/withThemeProvider'
import PreviewMarkdown from 'models/PreviewMarkdown'

const excerpt = `Processing huge amounts of data on the web is always a
back-end job—except when it’s not. Sometimes processing data in the browser via
JavaScript makes sense. What are those use cases, and how can we succeed at
them? Brian Greig tells allssing huge amounts of data on the web is always a
back-end job—except when it’s not. Sometimes processing data in the browser via
JavaScript makes sense. What are those use cases, and how can we succeed at
them? Brian Greig tells all.`

const PostListing = withThemeProvider(UnthemedPostListing)

storiesOf('PostListing', module).add('Default', () => {
  return (
    <PostListing
      previewMarkdown={PreviewMarkdown.fromFragment({
        excerpt,
        frontmatter: {
          title: 'Dismantle the System of Opression',
          path: '/posts/opression',
          date: 'December 2018',
          headerImage: null
        }
      })}
    />
  )
})
