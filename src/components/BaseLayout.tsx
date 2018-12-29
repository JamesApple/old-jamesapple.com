import * as React from 'react'
import theme from 'theme'

import { ThemeProvider } from 'utils/styled-components'
import { Helmet } from 'react-helmet'
import BaseStyles from 'BaseStyles'
import Header from 'components/Header'

export default class BaseLayout extends React.PureComponent<{}, {}> {
  public render() {
    const { children } = this.props
    return (
      <>
        <Helmet
          titleTemplate={`%s - James Apple`}
          defaultTitle={'James Apple'}
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
            <Header
              navItems={[
                { title: 'Home', path: '/' },
                { title: 'Contact', path: '/' },
                { title: 'Posts', path: '/' }
              ]}
            />
            {children}
          </>
        </ThemeProvider>
      </>
    )
  }
}
