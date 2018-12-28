import { graphql } from 'gatsby'

export interface IPreviewMarkdownFragment {
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

export const previewMarkdownFragment = graphql`
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

export default class PreviewMarkdown {
  private rawFragment: IPreviewMarkdownFragment
  private constructor(rawFragment: IPreviewMarkdownFragment) {
    this.rawFragment = rawFragment
  }

}
