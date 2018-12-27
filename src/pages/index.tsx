import * as React from 'react'

import { graphql } from 'gatsby'

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        name: string
        tagline: string
      }
    }
  }
}

export const indexPageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        name
        tagline
      }
    }
  }
`

export default class IndexPage extends React.PureComponent<IndexPageProps, {}> {
  public render() {
    const { name, tagline } = this.props.data.site.siteMetadata

    return (
      <div>
        <strong>{name}</strong>
        <strong>{tagline}</strong>
      </div>
    )
  }
}
