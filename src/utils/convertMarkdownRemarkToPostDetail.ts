export interface IMarkdownRemark {
  node: {
    id: string
    excerpt: string
    frontmatter: Frontmatter
  }
}

export interface IPostDetail {
  title: string
  date: string
  path: string
  excerpt: string
  headerImage: FluidImage | null
}

function convertMarkdownRemarkToPostDetail(
  remark: IMarkdownRemark
): IPostDetail {
  const { excerpt, frontmatter } = remark.node
  const { headerImage, title, path, date } = frontmatter
  return {
    excerpt,
    path,
    title,
    date,
    headerImage: headerImage ? headerImage.childImageSharp.fluid : null
  }
}

export default convertMarkdownRemarkToPostDetail
