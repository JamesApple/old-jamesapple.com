interface IDisplayMarkdown {
  date: string
  path: string
  title: string
  html: string
  description: string
  tableOfContents: string
  headerImage: FluidImage | null
  publicHeaderImageUrl: string | undefined
}

export interface IDisplayMarkdownFragment {
  html: string
  tableOfContents: string

  frontmatter: {
    date: string
    path: string
    title: string
    description: string

    headerImage: {
      publicURL: string
      childImageSharp: {
        fluid: FluidImage
      }
    } | null
  }
}

export default class DisplayMarkdown implements IDisplayMarkdown {
  private get imageData(): { headerImage: FluidImage | null; publicHeaderImageUrl?: string } {
    const { headerImage } = this.rawFragment.frontmatter
    if (!headerImage) return { headerImage: null, publicHeaderImageUrl: undefined }
    return {
      headerImage: headerImage.childImageSharp.fluid,
      publicHeaderImageUrl: headerImage.publicURL
    }
  }

  // Emergency refactor when less sleep deprived
  public get headerImage(): FluidImage | null {
    if (this._headerImage === undefined) {
      const { headerImage, publicHeaderImageUrl } = this.imageData
      this._headerImage = headerImage
      this._publicHeaderImageUrl = publicHeaderImageUrl
      return this._headerImage
    }
    return this._headerImage
  }

  public get publicHeaderImageUrl(): string | undefined {
    ;(() => this.headerImage)()
    return this._publicHeaderImageUrl
  }

  public get tableOfContents(): string {
    return this.rawFragment.tableOfContents
  }

  public get description(): string {
    return this.rawFragment.frontmatter.description
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
    const {
      publicHeaderImageUrl,
      description,
      tableOfContents,
      headerImage,
      date,
      path,
      title,
      html
    } = this

    return {
      publicHeaderImageUrl,
      description,
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

  private _publicHeaderImageUrl: string | undefined
  private _headerImage: FluidImage | null | undefined
  private rawFragment: IDisplayMarkdownFragment

  private constructor(rawFragment: IDisplayMarkdownFragment) {
    this.rawFragment = rawFragment
  }
}
