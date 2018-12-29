import { graphql } from 'gatsby'

export interface IDisplayMarkdown {
  date: string
  path: string
  title: string
  html: string
  headerImage: FluidImage | null
}

export interface IDisplayMarkdownFragment {
  html: string

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

export const displayMarkdownFragment = graphql`
  fragment DisplayMarkdown on MarkdownRemark {
    html

    frontmatter {
      date(formatString: "MMMM YYYY")
      path
      title

      headerImage {
        childImageSharp {
          fluid(maxWidth: 1200, maxHeight: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`

export default class DisplayMarkdown implements IDisplayMarkdown {
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

  public get html(): string {
    return this.rawFragment.html
  }

  public get value(): IDisplayMarkdown {
    const { headerImage, date, path, title, html } = this

    return {
      date,
      path,
      title,
      html,
      headerImage
    }
  }

  public static fromFragment(rawFragment: IDisplayMarkdownFragment) {
    return new DisplayMarkdown(rawFragment)
  }

  private _headerImage: FluidImage | null | undefined
  private rawFragment: IDisplayMarkdownFragment

  private constructor(rawFragment: IDisplayMarkdownFragment) {
    this.rawFragment = rawFragment
  }
}
