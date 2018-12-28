interface FluidImage {
  aspectRatio: number
  base64: string
  sizes: string
  src: string
  srcSet: string
  srcSetWebp: string
  srcWebp: string
}

interface Frontmatter {
  date: string
  path: string
  title: string
  headerImage?: {
    childImageSharp: {
      fluid: FluidImage
    }
  }
}
