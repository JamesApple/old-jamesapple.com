import * as React from 'react'

import { graphql } from 'gatsby'
import IndexPage from 'components/IndexPage'

import { IPreviewMarkdownFragment } from 'models/PreviewMarkdown';

interface IIndexPageContainerProps {
  data: {
    allMarkdownRemark: {
      edges: IPreviewMarkdownFragment[]
    }
  }
}

export const indexPageContainerQuery = graphql`
  query IndexPageContainerQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          ...PreviewMarkdown
        }
      }
    }
  }
`

class IndexPageContainer extends React.PureComponent<
  IIndexPageContainerProps,
  {}
> {

  private get postDetails(): IPostDetail[] {
    const { edges: remarks } = this.props.data.allMarkdownRemark
    return remarks.map(convertMarkdownRemarkToPostDetail)
  }

  public render() {
    const { postDetails } = this
    return <IndexPage postDetails={postDetails} />
  }
}

export default IndexPageContainer
