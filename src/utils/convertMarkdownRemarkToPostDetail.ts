export interface IMarkdownRemark {
  node: {
    id: string
    excerpt: string
    frontmatter: {
      title: string
      path: string
      date: string
    }
  }
}

export interface IPostDetail {
  title: string
  date: string
  path: string
  excerpt: string
}

function convertMarkdownRemarkToPostDetail(
  remark: IMarkdownRemark
): IPostDetail {
  const { excerpt, frontmatter } = remark.node
  const { title, path, date } = frontmatter
  return {
    excerpt,
    path,
    title,
    date
  }
}

export default convertMarkdownRemarkToPostDetail
