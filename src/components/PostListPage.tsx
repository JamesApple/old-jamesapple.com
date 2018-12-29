import * as React from 'react'

import PostList from 'components/PostList'
import BaseLayout from 'components/BaseLayout'
import PreviewMarkdown from 'models/PreviewMarkdown'
import Pagination from 'components/Pagination'

interface PostListPageProps {
  previewMarkdowns: PreviewMarkdown[]
  pageCount: number
  currentPage: number
}

export default class PostListPage extends React.PureComponent<PostListPageProps, {}> {
  public render() {
    const { pageCount, currentPage, previewMarkdowns } = this.props

    return (
      <BaseLayout>
        <PostList previewMarkdowns={previewMarkdowns} />
        <Pagination pathPrefix={'/posts/'} pageCount={pageCount} currentPage={currentPage} />
      </BaseLayout>
    )
  }
}
