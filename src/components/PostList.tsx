import * as React from 'react'

import PostListing from 'components/PostListing'
import PreviewMarkdown from 'models/PreviewMarkdown'
import styled from 'utils/styled-components'
import ContentWidth from './ContentWidth'

export interface IPostListProps {
  previewMarkdowns: PreviewMarkdown[]
}

const Container = styled.main``

export default class PostList extends React.PureComponent<IPostListProps, {}> {
  public render() {
    const { previewMarkdowns } = this.props
    const listings = previewMarkdowns.map((previewMarkdown, index) => (
      <PostListing key={index} previewMarkdown={previewMarkdown} />
    ))

    return (
      <ContentWidth>
        <Container>{listings}</Container>
      </ContentWidth>
    )
  }
}
