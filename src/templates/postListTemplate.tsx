import React from 'react'
import { graphql } from 'gatsby'
import PreviewMarkdown, { IPreviewMarkdownFragment } from 'models/PreviewMarkdown'
import PostListPage from 'components/PostListPage'

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
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          ...PreviewMarkdown
        }
      }
    }
  }
`

export default class PostListTemplate extends React.PureComponent<IIndexPageContainerProps, {}> {
  private get previewMarkdowns(): PreviewMarkdown[] {
    const { edges } = this.props.data.allMarkdownRemark
    return edges.map(({ node: remark }) => PreviewMarkdown.fromFragment(remark))
  }

  public render() {
    const { pageCount, currentPage } = this.props.pageContext

    return (
      <PostListPage
        previewMarkdowns={this.previewMarkdowns}
        pageCount={pageCount}
        currentPage={currentPage}
      />
    )
  }
}