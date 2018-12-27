import * as React from 'react'

import PostList, { IPostListProps } from './PostList'

interface IIndexPageProps extends IPostListProps {
  siteName: string
}

export default class IndexPage extends React.PureComponent<
  IIndexPageProps,
  {}
> {
  public render() {
    const { postDetails, siteName } = this.props
    return (
      <div>
        <h1>{siteName}</h1>
        <PostList postDetails={postDetails} />
      </div>
    )
  }
}
