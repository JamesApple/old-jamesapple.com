import * as React from 'react'

import PostListing, { PostListingProps } from './postListing'

interface PostListProps {
  postDetails: PostListingProps[]
}

export default class PostList extends React.PureComponent<PostListProps, {}> {
  public render() {
    const { postDetails } = this.props

    return postDetails.map((postDetail, index) => (
      <PostListing key={index} {...postDetail} />
    ))
  }
}
