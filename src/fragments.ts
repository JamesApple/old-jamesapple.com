import { graphql } from 'gatsby'

/*
 * Reusable fragments. They do not need to be referenced to be used. There is
 * no data masking.
 */

export const frontmatterQuery = graphql`
  fragment Frontmatter on MarkdownRemark {
    frontmatter {
      date(formatString: "MMMM YYYY")
      path
      title
    }
  }
`

export const frontmatterSquareHeader = graphql`
  fragment FrontmatterSquareHeader on MarkdownRemark {
    frontmatter {
      headerImage {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`

export interface IPreviewMarkdown {
  frontmatter: {
    date: string
    path: string
    title: string
    excerpt: string

    headerImage: {
      childImageSharp: {
        fluid: FluidImage
      }
    } | null
  }
}

export const previewMarkdown = graphql`
  fragment PreviewMarkdown on MarkdownRemark {
    frontmatter {
      date(formatString: "MMMM YYYY")
      path
      title
      excerpt(format: PLAIN, pruneLength: 200)

      headerImage {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`

export const showMarkdown = graphql``
