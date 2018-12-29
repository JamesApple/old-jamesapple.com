
interface IDisplayMarkdown {
  date: string
  path: string
  title: string
  html: string
  tableOfContents: string
  headerImage: FluidImage | null
}

export interface IDisplayMarkdownFragment {
  html: string
  tableOfContents: string

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

  public get tableOfContents(): string {
    return this.rawFragment.tableOfContents
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
    const { tableOfContents, headerImage, date, path, title, html } = this

    return {
      date,
      path,
      title,
      html,
      headerImage,
      tableOfContents
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
