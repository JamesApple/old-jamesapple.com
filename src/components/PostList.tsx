import * as React from 'react'

import PostListing from 'components/PostListing'
import PreviewMarkdown from 'models/PreviewMarkdown';

export interface IPostListProps {
  previewMarkdowns: PreviewMarkdown[]
}

export default class PostList extends React.PureComponent<IPostListProps, {}> {
  public render() {
    const { previewMarkdowns } = this.props
    const listings = previewMarkdowns.map((previewMarkdown, index) => (
      <PostListing key={index} previewMarkdown={previewMarkdown} />
    ))

    return <>{listings}</>
  }
}
