import * as React from 'react'

import UnthemedPostList from 'components/PostList'
import { storiesOf } from '@storybook/react'
import withThemeProvider from 'utils/withThemeProvider'

const excerpt = `Processing huge amounts of data on the web is always a
back-end job—except when it’s not. Sometimes processing data in the browser via
JavaScript makes sense. What are those use cases, and how can we succeed at
them? Brian Greig tells allssing huge amounts of data on the web is always a
back-end job—except when it’s not. Sometimes processing data in the browser via
JavaScript makes sense. What are those use cases, and how can we succeed at
them? Brian Greig tells all.`

const path = '/post-path'

const postDetails = [
  {
    title:
      'Dismantling the Patriarchy with Zach and Stephanie Glouchester of the Hampshire Institute',
    excerpt,
    path,
    date: 'December 2018'
  },
  {
    title: 'Building Additional Pylons',
    excerpt,
    path,
    date: 'December 2018'
  }
]

const PostList = withThemeProvider(UnthemedPostList)

storiesOf('PostList', module)
  .add('Default', () => {
    return (
      <PostList
        postDetails={postDetails}
      />
    )
  })

