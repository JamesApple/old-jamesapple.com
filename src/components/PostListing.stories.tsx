import * as React from 'react'

import UnthemedPostListing from './PostListing'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../utils/withThemeProvider'

const excerpt = `Processing huge amounts of data on the web is always a
back-end job—except when it’s not. Sometimes processing data in the browser via
JavaScript makes sense. What are those use cases, and how can we succeed at
them? Brian Greig tells allssing huge amounts of data on the web is always a
back-end job—except when it’s not. Sometimes processing data in the browser via
JavaScript makes sense. What are those use cases, and how can we succeed at
them? Brian Greig tells all.`

const PostListing = withThemeProvider(UnthemedPostListing)

storiesOf('PostListing', module)
  .add('Default', () => {
    return (
      <PostListing
        excerpt={excerpt}
        title={'Taming data with JavaScript'}
        date={'December 2018'}
        path={'/post-path'}
      />
    )
  })

  .add('Long Title', () => {
    return (
      <PostListing
        excerpt={excerpt}
        title={
          'Dismantling the Patriarchy with Zach and Stephanie Glouchester of the Hampshire Institute'
        }
        date={'December 2018'}
        path={'/post-path'}
      />
    )
  })
