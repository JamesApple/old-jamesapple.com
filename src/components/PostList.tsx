import * as React from 'react'

import PostListing from './PostListing'
import { IPostDetail } from '../utils/convertMarkdownRemarkToPostDetail'
import styled from '../styled-components'

export interface IPostListProps {
  postDetails: IPostDetail[]
}

const ListingContainer = styled.div`
  margin: auto;
  margin-top: 64px;
  max-width: 70ch;
`

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export default class PostList extends React.PureComponent<IPostListProps, {}> {
  public render() {
    const { postDetails } = this.props
    const listings = postDetails.map((postDetail, index) => (
      <PostListing as={ListingContainer} key={index} {...postDetail} />
    ))

    return <ListContainer>{listings}</ListContainer>
  }
}
