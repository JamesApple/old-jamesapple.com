import { graphql } from 'gatsby'

interface IPreviewMarkdown {
  date: string
  path: string
  title: string
  excerpt: string
  headerImage: FluidImage | null
}

export interface IPreviewMarkdownFragment {
  excerpt: string

  frontmatter: {
    date: string
    path: string
    title: string

    headerImage: {
      childImageSharp: {
        fluid: FluidImage
      }
    } | null
  }
}

export const previewMarkdownFragment = graphql`
  fragment PreviewMarkdown on MarkdownRemark {
    excerpt(format: PLAIN, pruneLength: 200)

    frontmatter {
      date(formatString: "MMMM YYYY")
      path
      title

      headerImage {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`

export default class PreviewMarkdown implements IPreviewMarkdown {
  private get imageData(): FluidImage | null {
    const { headerImage } = this.rawFragment.frontmatter
    if (!headerImage) return null
    return headerImage.childImageSharp.fluid
  }

  public get headerImage(): FluidImage | null {
    if (this._headerImage === undefined) {
      this._headerImage = this.imageData
      return this._headerImage
    }
    return this._headerImage
  }

  public get date(): string {
    return this.rawFragment.frontmatter.date
  }

  public get title(): string {
    return this.rawFragment.frontmatter.title
  }

  public get path(): string {
    return this.rawFragment.frontmatter.path
  }

  public get excerpt(): string {
    return this.rawFragment.excerpt
  }

  public get value(): IPreviewMarkdown {
    const { headerImage, date, path, title, excerpt } = this

    return {
      date,
      path,
      title,
      excerpt,
      headerImage
    }
  }

  public static fromFragment(rawFragment: IPreviewMarkdownFragment) {
    return new PreviewMarkdown(rawFragment)
  }

  private _headerImage: FluidImage | null | undefined
  private rawFragment: IPreviewMarkdownFragment

  private constructor(rawFragment: IPreviewMarkdownFragment) {
    this.rawFragment = rawFragment
  }
}
