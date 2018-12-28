import * as React from 'react'

import PostListing from 'components/PostListing'
import { IPostDetail } from 'utils/convertMarkdownRemarkToPostDetail'

export interface IPostListProps {
  postDetails: IPostDetail[]
}
export default class PostList extends React.PureComponent<IPostListProps, {}> {
  public render() {
    const { postDetails } = this.props
    const listings = postDetails.map((postDetail, index) => (
      <PostListing key={index} {...postDetail} />
    ))

    return <>{listings}</>
  }
}
