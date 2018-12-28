import * as React from 'react'

import PostList  from 'components/PostList'
import BaseLayout from 'components/BaseLayout'
import PreviewMarkdown from 'models/PreviewMarkdown';

interface IPostListProps {
  previewMarkdowns: PreviewMarkdown[]
}

export default class IndexPage extends React.PureComponent<IPostListProps, {}> {
  public render() {
    const { previewMarkdowns } = this.props

    return (
      <BaseLayout>
        <PostList previewMarkdowns={previewMarkdowns} />
      </BaseLayout>
    )
  }
}
