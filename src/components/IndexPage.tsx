import * as React from 'react'
import styled from 'styled-components';

import PostList, { IPostListProps } from './PostList'

interface IIndexPageProps extends IPostListProps {
  siteName: string
}

const Title = styled.h1`
  font-size: 64px;
`

export default class IndexPage extends React.PureComponent<
  IIndexPageProps,
  {}
> {
  public render() {
    const { postDetails, siteName } = this.props
    return (
      <div>
        <Title>{siteName}</Title>
        <PostList postDetails={postDetails} />
      </div>
    )
  }
}
