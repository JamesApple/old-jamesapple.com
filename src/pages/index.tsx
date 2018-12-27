import * as React from 'react'

import { graphql } from 'gatsby'
import IndexPage from '../components/IndexPage'

import convertMarkdownRemarkToPostDetail, {
  IMarkdownRemark,
  IPostDetail
} from '../utils/convertMarkdownRemarkToPostDetail'

interface IIndexPageContainerProps {
  data: {
    site: {
      siteMetadata: {
        name: string
      }
    }

    allMarkdownRemark: {
      edges: IMarkdownRemark[]
    }
  }
}

export const indexPageContainerQuery = graphql`
  query IndexPageContainerQuery {
    site {
      siteMetadata {
        name
      }
    }

    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(format: PLAIN, pruneLength: 200)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`

class IndexPageContainer extends React.PureComponent<
  IIndexPageContainerProps,
  {}
> {
  private get siteName(): string {
    const { siteMetadata } = this.props.data.site
    return siteMetadata.name
  }

  private get postDetails(): IPostDetail[] {
    const { edges: remarks } = this.props.data.allMarkdownRemark
    return remarks.map(convertMarkdownRemarkToPostDetail)
  }

  public render() {
    const { siteName, postDetails } = this
    return <IndexPage postDetails={postDetails} siteName={siteName} />
  }
}

export default IndexPageContainer
