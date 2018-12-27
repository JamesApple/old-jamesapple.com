import * as React from 'react'

import { IPostDetail } from '../utils/convertMarkdownRemarkToPostDetail'
import PostListing from './postListing'

export interface IPostListProps {
  postDetails: IPostDetail[]
}

export default class PostList extends React.PureComponent<IPostListProps, {}> {
  public render() {
    const { postDetails } = this.props

    return postDetails.map((postDetail, index) => (
      <PostListing key={index} {...postDetail} />
    ))
  }
}
