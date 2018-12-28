import * as React from 'react'

import { graphql } from 'gatsby'
import PostPage from 'components/PostPage'

interface IPostTemplateProps {
  data: {
    markdownRemark: {
      html: string
      frontmatter: Frontmatter
    }
  }
}

export const postTemplateQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      ...Frontmatter
    }
  }
`

export default class PostTemplate extends React.PureComponent<IPostTemplateProps, {}> {
  private get fluidImage(): null | FluidImage {
    const { headerImage } = this.props.data.markdownRemark.frontmatter
    if (!headerImage) return null
    return headerImage.childImageSharp.fluid
  }

  public render() {
    const { frontmatter, html } = this.props.data.markdownRemark

    return (
      <>
        <PostPage
          headerImage={this.fluidImage}
          title={frontmatter.title}
          date={frontmatter.date}
          html={html}
        />
      </>
    )
  }
}
