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
  id: string
  title: string
  date: string
  path: string
  excerpt: string
}

function convertMarkdownRemarkToPostDetail(remark: IMarkdownRemark): IPostDetail {
  const { id, excerpt, frontmatter } = remark.node
  const { title, path, date } = frontmatter
  return {
    id,
    excerpt,
    path,
    title,
    date
  }
}

export default convertMarkdownRemarkToPostDetail
