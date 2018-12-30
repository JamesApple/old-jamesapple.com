import * as React from 'react'
import IndexPage from 'components/IndexPage'
import SEO from 'components/SEO'
import { graphql } from 'gatsby'
import PreviewMarkdown, { IPreviewMarkdownFragment } from 'models/PreviewMarkdown'

interface IIndexPageContainerProps {
  pageContext: {
    limit: number
    skip: number
    pageCount: number
    currentPage: number
  }
  data: {
    allMarkdownRemark: {
      edges: [{ node: IPreviewMarkdownFragment }]
    }
  }
}

export const postListQuery = graphql`
  query postListQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
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
    if (!this.props.data.allMarkdownRemark) return []
    const { edges } = this.props.data.allMarkdownRemark
    return edges.map(({ node: remark }) => PreviewMarkdown.fromFragment(remark))
  }

  public render() {
    return (
      <>
        <SEO
          title="Software Engineer"
          description="Software Engineering Blog of James Apple."
          pathname="/"
        />
        <IndexPage previewMarkdowns={this.previewMarkdowns} />
      </>
    )
  }
}

export default IndexPageContainer
