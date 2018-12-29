import { graphql } from 'gatsby'

export const displayMarkdownFragment = graphql`
  fragment DisplayMarkdown on MarkdownRemark {
    html
    tableOfContents(pathToSlugField: "frontmatter.path")

    frontmatter {
      date(formatString: "MMMM YYYY")
      path
      title
      description

      headerImage {
        publicURL
        childImageSharp {
          fluid(maxWidth: 1200, maxHeight: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`

export const previewMarkdownFragment = graphql`
  fragment PreviewMarkdown on MarkdownRemark {
    excerpt(format: PLAIN, pruneLength: 200)

    frontmatter {
      date(formatString: "MMMM YYYY")
      path
      title
      description

      headerImage {
        childImageSharp {
          fluid(maxWidth: 1800, maxHeight: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`
