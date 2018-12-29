import * as React from 'react'

import UnthemedPagination from './Pagination'
import { storiesOf } from '@storybook/react'
import withThemeProvider from 'utils/withThemeProvider';

const Pagination = withThemeProvider(UnthemedPagination)

storiesOf('Pagination', module)
  .add('firstPage', () => {
    return <Pagination pathPrefix={'/posts/'} currentPage={1} pageCount={12}/>
  })
  .add('middle page', () => {
    return <Pagination pathPrefix={'/posts/'} currentPage={6} pageCount={12}/>
  })
  .add('last page', () => {
    return <Pagination pathPrefix={'/posts/'} currentPage={12} pageCount={12}/>
  })
