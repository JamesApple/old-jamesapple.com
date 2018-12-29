import * as React from 'react'
import { graphql } from 'gatsby'
import IndexPage from 'components/IndexPage'
import PreviewMarkdown, { IPreviewMarkdownFragment } from 'models/PreviewMarkdown'

interface IIndexPageContainerProps {
  data: {
    allMarkdownRemark: {
      edges: [{ node: IPreviewMarkdownFragment }]
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

class IndexPageContainer extends React.PureComponent<IIndexPageContainerProps, {}> {
  private get previewMarkdowns(): PreviewMarkdown[] {
    const { edges } = this.props.data.allMarkdownRemark
    return edges.map(({ node: remark }) => PreviewMarkdown.fromFragment(remark))
  }

  public render() {
    return <IndexPage previewMarkdowns={this.previewMarkdowns} />
  }
}

export default IndexPageContainer
