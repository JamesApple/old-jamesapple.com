import * as React from 'react'
import { graphql } from 'gatsby'
import PostPage from 'components/PostPage'
import DisplayMarkdown, { IDisplayMarkdownFragment } from 'models/DisplayMarkdown'
import SEO from 'components/SEO'

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
  private get displayMarkdown(): DisplayMarkdown {
    const { markdownRemark } = this.props.data
    return DisplayMarkdown.fromFragment(markdownRemark)
  }

  public render() {
    const { displayMarkdown } = this
    return (
      <>
        <SEO
          title={displayMarkdown.title}
          description={displayMarkdown.description}
          pathname={displayMarkdown.path}
          article={true}
          image={displayMarkdown.publicHeaderImageUrl}
        />

        <PostPage displayMarkdown={displayMarkdown} />
      </>
    )
  }
}
