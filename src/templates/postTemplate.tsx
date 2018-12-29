import * as React from 'react'

import { graphql } from 'gatsby'
import PostPage from 'components/PostPage'
import DisplayMarkdown, { IDisplayMarkdownFragment } from 'models/DisplayMarkdown';

interface IPostTemplateProps {
  data: {
    markdownRemark: IDisplayMarkdownFragment
  }
}

export const postTemplateQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      ...DisplayMarkdown
    }
  }
`

export default class PostTemplate extends React.PureComponent<IPostTemplateProps, {}> {

  public render() {
    const { markdownRemark } = this.props.data

    return (
      <PostPage
        displayMarkdown={DisplayMarkdown.fromFragment(markdownRemark)}
        />
    )
  }
}
