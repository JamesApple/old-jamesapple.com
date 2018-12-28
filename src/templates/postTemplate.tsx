import * as React from 'react'

import { graphql } from 'gatsby'
import PostPage from '../components/PostPage'

interface IPostTemplateProps {
  data: {
    markdownRemark: {
      html: string
      frontmatter: {
        date: string
        path: string
        title: string
      }
    }
  }
}

export const postTemplateQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
      }
    }
  }
`

export default class PostTemplate extends React.PureComponent<
  IPostTemplateProps,
  {}
> {
  public render() {
    const { frontmatter, html } = this.props.data.markdownRemark

    return (
      <PostPage title={frontmatter.title} date={frontmatter.date} html={html} />
    )
  }
}
