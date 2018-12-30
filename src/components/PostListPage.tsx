import * as React from 'react'

import PostList from 'components/PostList'
import BaseLayout from 'components/BaseLayout'
import PreviewMarkdown from 'models/PreviewMarkdown'
import Pagination from 'components/Pagination'
import styled from 'utils/styled-components';

interface PostListPageProps {
  previewMarkdowns: PreviewMarkdown[]
  pageCount: number
  currentPage: number
  pathPrefix?: string
}

const Divider = styled.div`
  height: 4rem;
  width: 100%;
`

export default class PostListPage extends React.PureComponent<PostListPageProps, {}> {
  public render() {
    const { pageCount, currentPage, previewMarkdowns, pathPrefix = '/posts/' } = this.props

    return (
      <BaseLayout>
        <Divider />
        <PostList previewMarkdowns={previewMarkdowns} />
        <Pagination pathPrefix={pathPrefix} pageCount={pageCount} currentPage={currentPage} />
      </BaseLayout>
    )
  }
}
