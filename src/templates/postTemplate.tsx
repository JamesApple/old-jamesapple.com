import * as React from 'react'

import { graphql } from 'gatsby'

interface PostTemplateProps {
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
  PostTemplateProps,
  {}
> {
  public render() {
    const { frontmatter, html } = this.props.data.markdownRemark

    return (
      <div>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    )
  }
}
