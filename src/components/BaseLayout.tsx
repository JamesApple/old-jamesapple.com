import * as React from 'react'
import theme from '../theme'

import { ThemeProvider } from '../styled-components'
import { StaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import BaseStyles from '../BaseStyles';

interface IBaseLayoutQuery {
  site: {
    siteMetadata: {
      name: string
    }
  }
}

const query = graphql`
  {
    site {
      siteMetadata {
        name
      }
    }
  }
`

export default class BaseLayout extends React.PureComponent<{}, {}> {
  public render() {
    const { children } = this.props
    return (
      <StaticQuery
        query={query}
        render={(data: IBaseLayoutQuery) => (
          <>
            <Helmet
              titleTemplate={`%s - ${data.site.siteMetadata.name}`}
              defaultTitle={data.site.siteMetadata.name}
              meta={[
                {
                  name: 'description',
                  content: 'The site of awesomeness'
                }
              ]}
              />

            <ThemeProvider theme={theme}>
              <>
              <BaseStyles />
              {children}
              </>
            </ThemeProvider>
          </>
        )}
      />
    )
  }
}
